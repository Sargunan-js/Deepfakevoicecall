import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CallScreen from './pages/CallScreen';
import Dashboard from './pages/Dashboard';
import CallDetail from './pages/CallDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call" element={<CallScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/call-detail" element={<CallDetail />} />
      </Routes>
    </Router>
  );
}

export default App;