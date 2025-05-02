import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignIn from './components/sign_in';
import DashboardHome from './components/dashboardHome';
import SignUp from './components/sign_up';
import ComparisonChart from './components/comparisonChart';
import PlayerProfile from './components/PlayerProfile';
import PlayerAddEdit from './components/PlayerAddEdit';
function App() {
  return (
    <Router>
      {/* Add your routes here */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/compare" element={<ComparisonChart />} />
        <Route path="/playerProfile/:playerId" element={<PlayerProfile />} />
        <Route path="/playerAddorEdit" element={<PlayerAddEdit />} />
        <Route path="/searchPlayer" element={<searchPlayer />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  )
}

export default App;
