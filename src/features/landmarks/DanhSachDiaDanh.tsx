import { useState, useMemo, useCallback } from 'react'
import TheDiaDanh, { type DiaDanh } from './TheDiaDanh'
import danhSachDiaDanh from '../../data/dia-danh.json'

function DanhSachDiaDanh() {
  const [boLoc, setBoLoc] = useState('')
  const [yeuThich, setYeuThich] = useState<number[]>([])

  const ketQuaLoc = useMemo(() => {
    console.log('Đang lọc lại danh sách…')
    return (danhSachDiaDanh as DiaDanh[]).filter((dd) =>
      dd.ten.toLowerCase().includes(boLoc.toLowerCase()),
    )
  }, [boLoc])

  const themYeuThich = useCallback((id: number) => {
    setYeuThich((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 600 }}>
      <h1>Danh sách địa danh Huế</h1>
      <p>Đã yêu thích: {yeuThich.length} địa danh</p>

      <input
        type="text"
        value={boLoc}
        onChange={(e) => setBoLoc(e.target.value)}
        placeholder="Lọc theo tên địa danh…"
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          width: '100%',
          marginBottom: '1rem',
        }}
      />

      <div>
        {ketQuaLoc.map((dd) => (
          <TheDiaDanh key={dd.id} diaDanh={dd} onYeuThich={themYeuThich} />
        ))}
      </div>
    </div>
  )
}

export default DanhSachDiaDanh
