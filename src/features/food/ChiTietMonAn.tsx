import { useState, useEffect } from 'react'
import fetchMonAn, { type MonAn } from '../../data/fetchMonAn'

interface ChiTietMonAnProps {
  idMonAn: number
}

function ChiTietMonAn({ idMonAn }: ChiTietMonAnProps) {
  const [monAn, setMonAn] = useState<MonAn | null>(null)

  useEffect(() => {
    let daHuy = false

    fetchMonAn(idMonAn).then((data) => {
      if (!daHuy && data) {
        setMonAn(data)
      }
    })

    return () => {
      daHuy = true
    }
  }, [idMonAn])

  // Tự suy ra trạng thái đang tải — không cần state riêng
  const dangTai = monAn === null || monAn.id !== idMonAn

  if (dangTai) return <p>Đang tải thông tin món ăn…</p>
  if (!monAn) return <p>Không tìm thấy món ăn</p>

  return (
    <div>
      <h3>
        {monAn.ten} — {monAn.gia.toLocaleString()}đ
      </h3>
      <p>{monAn.moTa}</p>
    </div>
  )
}

export default ChiTietMonAn
