import { Link } from 'react-router-dom';
<Link to="/call-detail" style={{ color: 'white', textDecoration: 'none' }}>Call Detail</Link>

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 40px',
      background: 'linear-gradient(90deg, #1a237e, #283593)',
      color: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <h2 style={{ margin: 0, fontSize: '20px' }}>🛡️ VoiceGuard</h2>
      <div style={{ display: 'flex', gap: '25px', fontSize: '15px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/call" style={{ color: 'white', textDecoration: 'none' }}>Live Call</Link>
        <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;