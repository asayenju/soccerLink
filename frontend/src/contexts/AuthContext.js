// frontend/src/contexts/AuthContext.js
import { createContext, useState, useEffect } from 'react';
import { loginScout, registerScout } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [scout, setScout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem('scout');
      if (storedUser) {
        setScout(JSON.parse(storedUser));
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (credentials) => {
    const response = await loginScout(credentials);
    localStorage.setItem('scoutToken', response.token);
    localStorage.setItem('scout', JSON.stringify(response.scout));
    setScout(response.scout);
    return response;
  };

  const register = async (scoutData) => {
    const response = await registerScout(scoutData);
    localStorage.setItem('scoutToken', response.token);
    localStorage.setItem('scout', JSON.stringify(response.scout));
    setScout(response.scout);
    return response;
  };

  const logout = () => {
    localStorage.removeItem('scoutToken');
    localStorage.removeItem('scout');
    setScout(null);
  };

  return (
    <AuthContext.Provider value={{ scout, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;