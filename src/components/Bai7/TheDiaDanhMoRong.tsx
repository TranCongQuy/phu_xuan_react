import { useState } from 'react'
import type { DiaDanh } from '../../data/diaDanhHue'

interface TheDiaDanhMoRongProps {
  diaDanh: DiaDanh
  dangMo: boolean
  laYeuThich: boolean
  onXem: (id: number) => void
  onYeuThich: (id: number) => void
}

export default function TheDiaDanhMoRong({
  diaDanh,
  dangMo,
  laYeuThich,
  onXem,
  onYeuThich,
}: TheDiaDanhMoRongProps) {
  const [daSaoChep, setDaSaoChep] = useState(false)

  function handleYeuThich(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation() // không để cú bấm lan lên thẻ
    onYeuThich(diaDanh.id)
  }

  async function handleChiaSe(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(diaDanh.ten + ' — ' + diaDanh.moTa)
      setDaSaoChep(true)
      setTimeout(() => setDaSaoChep(false), 1500)
    } catch {
      alert('Trình duyệt không cho phép sao chép. Hãy chạy trên localhost.')
    }
  }

  return (
    <article
      className={'the-mo-rong' + (dangMo ? ' dang-mo' : '')}
      onClick={() => onXem(diaDanh.id)}
    >
      <header>
        <h3>{diaDanh.ten}</h3>
        <span className="loai">{diaDanh.loai}</span>
      </header>

      {dangMo && <p className="mo-ta">{diaDanh.moTa}</p>}

      <div className="hanh-dong">
        <button onClick={handleYeuThich} aria-pressed={laYeuThich}>
          {laYeuThich ? '♥ Đã thích' : '♡ Yêu thích'}
        </button>
        <button onClick={handleChiaSe}>
          {daSaoChep ? 'Đã sao chép' : 'Chia sẻ'}
        </button>
      </div>
    </article>
  )
}
