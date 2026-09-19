import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '80px', maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ fontSize: '60px' }}>🛡️</div>
      <h1 style={{ fontSize: '34px', color: '#1a237e', marginBottom: '15px' }}>VoiceGuard</h1>
      <p style={{ fontSize: '18px', color: '#444', marginBottom: '30px' }}>
        Realtime AI-powered deepfake voice call screener — detects
        AI-generated voices live, during your call.
      </p>
      <Link to="/call">
        <button style={{
          padding: '14px 32px',
          fontSize: '16px',
          backgroundColor: '#283593',
          color: 'white',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer'
        }}>
          Start Live Call Screening
        </button>
      </Link>
    </div>
  );
}

export default Home;