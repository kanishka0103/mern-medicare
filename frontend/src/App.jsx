import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_API_URL || 'https://mern-medicare-backend-g6lg.onrender.com'

function App() {
  const [msg, setMsg] = useState('loading...')

  useEffect(() => {
    fetch(`${API_BASE}/api/hello`)
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('❌ Error: ' + err.message))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: 80 }}>
      <h1>Hello World from Frontend</h1>
      <p>{msg}</p>
    </div>
  )
}

export default App
