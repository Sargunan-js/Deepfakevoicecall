function CallDetail() {
  const chunks = [
    { time: "0:00 - 0:05", risk: "Green", confidence: 94, note: "Natural pitch and cadence" },
    { time: "0:05 - 0:10", risk: "Green", confidence: 91, note: "Consistent voice texture" },
    { time: "0:10 - 0:15", risk: "Yellow", confidence: 67, note: "Slight unnatural pause detected" },
    { time: "0:15 - 0:20", risk: "Red", confidence: 88, note: "Unnatural spectral pattern — likely synthetic" },
    { time: "0:20 - 0:25", risk: "Yellow", confidence: 71, note: "Irregular pitch variation" },
  ];

  const riskStyle = {
    Green: { bg: '#e8f5e9', text: '#2e7d32' },
    Yellow: { bg: '#fff8e1', text: '#f9a825' },
    Red: { bg: '#ffebee', text: '#c62828' }
  };

  return (
    <div style={{ maxWidth: '750px', margin: '0 auto', padding: '30px 20px' }}>
      <h2 style={{ color: '#1a237e', marginBottom: '6px' }}>Call Detail — Session #1042</h2>
      <p style={{ color: '#666', marginBottom: '25px' }}>Chunk-by-chunk analysis breakdown</p>

      {chunks.map((c, i) => (
        <div key={i} style={{
          background: 'white',
          borderRadius: '10px',
          padding: '16px 20px',
          marginBottom: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
          borderLeft: `5px solid ${riskStyle[c.risk].text}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div>
            <span style={{
              display: 'inline-block',
              padding: '3px 12px',
              borderRadius: '15px',
              backgroundColor: riskStyle[c.risk].bg,
              color: riskStyle[c.risk].text,
              fontWeight: 600,
              fontSize: '13px',
              marginBottom: '6px'
            }}>
              {c.risk}
            </span>
            <p style={{ margin: '4px 0 0', color: '#333', fontSize: '14px' }}>{c.note}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 600, color: '#1a237e' }}>{c.confidence}%</div>
            <div style={{ fontSize: '13px', color: '#999' }}>{c.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CallDetail;