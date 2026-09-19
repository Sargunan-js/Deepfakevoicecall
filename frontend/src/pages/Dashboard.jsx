import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const stats = { totalCalls: 42, fakeDetected: 6, avgConfidence: 88 };

  const timelineData = [
    { time: "0:00", risk: 10 },
    { time: "0:05", risk: 15 },
    { time: "0:10", risk: 45 },
    { time: "0:15", risk: 82 },
    { time: "0:20", risk: 60 },
    { time: "0:25", risk: 20 },
  ];

  const logs = [
    { time: "10:32 AM", risk: "Green", confidence: 92, note: "Natural pitch variation" },
    { time: "10:33 AM", risk: "Yellow", confidence: 68, note: "Slight unnatural pauses detected" },
    { time: "10:34 AM", risk: "Green", confidence: 95, note: "Consistent voice pattern" }
  ];

  const riskColor = { Green: '#2e7d32', Yellow: '#f9a825', Red: '#c62828' };

  return (
    <div style={{ maxWidth: '750px', margin: '0 auto', padding: '30px 20px' }}>
      <h2 style={{ color: '#1a237e', marginBottom: '20px' }}>Dashboard</h2>

      {/* Analytics Cards */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '30px' }}>
        <StatCard label="Total Calls Screened" value={stats.totalCalls} color="#283593" />
        <StatCard label="Fake Voices Detected" value={`${stats.fakeDetected}`} color="#c62828" />
        <StatCard label="Avg. Confidence" value={`${stats.avgConfidence}%`} color="#2e7d32" />
      </div>

      {/* Risk Timeline Chart */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
        marginBottom: '30px'
      }}>
        <h4 style={{ color: '#1a237e', marginBottom: '15px' }}>Risk Score Timeline — Last Call</h4>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="time" fontSize={12} />
            <YAxis fontSize={12} domain={[0, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="risk" stroke="#c62828" strokeWidth={2.5} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Call History */}
      <h4 style={{ color: '#1a237e', marginBottom: '12px' }}>Recent Call History</h4>
      {logs.map((log, i) => (
        <div key={i} style={{
          background: 'white',
          borderRadius: '10px',
          padding: '16px 20px',
          marginBottom: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <strong style={{ color: riskColor[log.risk] }}>{log.risk}</strong>
            <p style={{ margin: '4px 0 0', color: '#666', fontSize: '14px' }}>{log.note}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 600 }}>{log.confidence}%</div>
            <div style={{ fontSize: '13px', color: '#999' }}>{log.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '20px',
      flex: 1,
      minWidth: '150px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
      borderTop: `4px solid ${color}`
    }}>
      <div style={{ fontSize: '26px', fontWeight: 700, color }}>{value}</div>
      <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>{label}</div>
    </div>
  );
}

export default Dashboard;