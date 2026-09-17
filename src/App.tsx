import { useState } from 'react'
import LuotXemDaiNoi from './features/landmarks/LuotXemDaiNoi'

function App() {
  const [hienThi, setHienThi] = useState(true)

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <button onClick={() => setHienThi(!hienThi)}>
        {hienThi ? 'Ẩn thẻ Đại Nội' : 'Hiện thẻ Đại Nội'}
      </button>
      {hienThi && <LuotXemDaiNoi />}
    </div>
  )
}

export default App
