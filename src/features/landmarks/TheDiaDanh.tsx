import { memo } from 'react'

export interface DiaDanh {
  id: number
  ten: string
  khuVuc: string
}

interface TheDiaDanhProps {
  diaDanh: DiaDanh
  onYeuThich: (id: number) => void
}

const TheDiaDanh = memo(function TheDiaDanh({
  diaDanh,
  onYeuThich,
}: TheDiaDanhProps) {
  console.log('Kết xuất thẻ:', diaDanh.ten)

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: '1rem',
        marginBottom: '0.5rem',
      }}
    >
      <h4 style={{ margin: '0 0 0.5rem' }}>{diaDanh.ten}</h4>
      <p style={{ margin: '0 0 0.5rem', color: 'gray', fontSize: '0.9em' }}>
        Khu vực: {diaDanh.khuVuc}
      </p>
      <button onClick={() => onYeuThich(diaDanh.id)}>♡ Yêu thích</button>
    </div>
  )
})

export default TheDiaDanh
