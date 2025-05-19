// frontend/src/contexts/AuthContext.js
import { createContext, useState, useEffect, useCallback } from 'react';
import { loginScout, registerScout, logoutScout } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [scout, setScout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load user data from storage on initial render
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = localStorage.getItem('scout');
        const token = localStorage.getItem('scoutToken');
        
        if (storedUser && token) {
          // Optional: Verify token validity with backend here
          setScout(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error('Failed to load user:', err);
        // Clear invalid data
        localStorage.removeItem('scout');
        localStorage.removeItem('scoutToken');
      } finally {
        setLoading(false);
      }
    };
    
    loadUser();
  }, []);

  const login = useCallback(async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await loginScout(credentials);
      
      localStorage.setItem('scoutToken', response.token);
      localStorage.setItem('scout', JSON.stringify(response.scout));
      setScout(response.scout);
      
      return response;
    } catch (err) {
      setError(err.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(async (scoutData) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await registerScout(scoutData);
      
      localStorage.setItem('scoutToken', response.token);
      localStorage.setItem('scout', JSON.stringify(response.scout));
      setScout(response.scout);
      
      return response;
    } catch (err) {
      setError(err.message || 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      setLoading(true);
      await logoutScout();
    } catch (err) {
      console.error('Logout error:', err);
      // Continue with client-side cleanup even if API fails
    } finally {
      // Clear all auth-related storage
      localStorage.removeItem('scoutToken');
      localStorage.removeItem('scout');
      sessionStorage.removeItem('scoutToken');
      sessionStorage.removeItem('scout');
      
      setScout(null);
      setLoading(false);
    }
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = {
    scout,
    isAuthenticated: !!scout, // Derived state
    loading,
    error,
    login,
    register,
    logout,
    setError // Allow error clearing from consumers
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;