import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CallScreen() {
  const [analyzing, setAnalyzing] = useState(false);
  const [risk, setRisk] = useState(null); // "green" | "yellow" | "red"
  const navigate = useNavigate();

  const startAnalysis = () => {
    setAnalyzing(true);
    setRisk(null);
    // Dummy simulation for now — later replaced by real chunk-based API calls
    setTimeout(() => {
      setRisk("yellow"); // dummy result
      setAnalyzing(false);
    }, 2000);
  };

  const riskColors = {
    green: { bg: '#e8f5e9', text: '#2e7d32', label: '✅ Safe — Genuine Voice' },
    yellow: { bg: '#fff8e1', text: '#f9a825', label: '⚠️ Suspicious — Check Carefully' },
    red: { bg: '#ffebee', text: '#c62828', label: '🚨 High Risk — Likely AI Voice' }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ color: '#1a237e' }}>Live Call Screening</h2>
      <p style={{ color: '#666', marginBottom: '25px' }}>
        Simulated call in progress — audio chunks are analyzed every few seconds.
      </p>

      <div style={{
        background: 'white',
        borderRadius: '14px',
        padding: '30px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
      }}>
        <div style={{ fontSize: '50px', marginBottom: '15px' }}>📞</div>

        <button onClick={startAnalysis} disabled={analyzing} style={{
          padding: '12px 28px',
          backgroundColor: analyzing ? '#9fa8da' : '#283593',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          fontSize: '15px',
          cursor: analyzing ? 'not-allowed' : 'pointer'
        }}>
          {analyzing ? '🔄 Analyzing voice...' : '🎙️ Analyze Current Chunk'}
        </button>

        {risk && (
          <div style={{
            marginTop: '25px',
            padding: '18px',
            borderRadius: '10px',
            backgroundColor: riskColors[risk].bg,
            color: riskColors[risk].text,
            fontWeight: 600
          }}>
            {riskColors[risk].label}
          </div>
        )}

        {risk && (
          <button onClick={() => navigate('/dashboard')} style={{
            marginTop: '15px',
            padding: '8px 20px',
            background: 'none',
            border: '1px solid #283593',
            color: '#283593',
            borderRadius: '20px',
            cursor: 'pointer'
          }}>
            View Full Report →
          </button>
        )}
      </div>
    </div>
  );
}

export default CallScreen;