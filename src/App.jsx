import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HealthDashboard from './pages/HealthDashboard/HealthDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/health-dashboard" element={<HealthDashboard />} />
        
        {/* Add more project routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
