import { useState } from 'react'
import type React from 'react'
import '../../styles/Buoi8.css'

export interface FormDuLieu {
  ten: string
  moTa: string
  giaVe: string
  phuong: string
  loaiHinh: string
  dongY: boolean
}

const GIA_TRI_BAN_DAU: FormDuLieu = {
  ten: '',
  moTa: '',
  giaVe: '',
  phuong: '',
  loaiHinh: 'di-tich',
  dongY: false,
}

export default function FormThemDiaDiem() {
  const [duLieu, setDuLieu] = useState<FormDuLieu>(GIA_TRI_BAN_DAU)

  // 1 handler duy nhất cho mọi ô
  function xuLyThayDoi(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const target = e.target
    const { name } = target
    const value =
      target instanceof HTMLInputElement && target.type === 'checkbox'
        ? target.checked
        : target.value

    setDuLieu((truoc) => ({
      ...truoc,
      [name]: value,
    }))
  }

  return (
    <form className="form-them">
      <h2>Thêm địa điểm tham quan</h2>

      <div className="truong">
        <label htmlFor="ten">Tên địa điểm</label>
        <input
          id="ten"
          name="ten"
          type="text"
          value={duLieu.ten}
          onChange={xuLyThayDoi}
          placeholder="Ví dụ: Lăng Minh Mạng"
        />
      </div>

      <div className="truong">
        <label htmlFor="moTa">Mô tả ngắn</label>
        <textarea
          id="moTa"
          name="moTa"
          rows={4}
          value={duLieu.moTa}
          onChange={xuLyThayDoi}
        />
      </div>

      <div className="truong">
        <label htmlFor="phuong">Phường / xã</label>
        <select
          id="phuong"
          name="phuong"
          value={duLieu.phuong}
          onChange={xuLyThayDoi}
        >
          <option value="">-- Chọn phường --</option>
          <option value="phu-hau">Phú Hậu</option>
          <option value="huong-long">Hương Long</option>
          <option value="thuy-bieu">Thuỷ Biều</option>
          <option value="vy-da">Vỹ Dạ</option>
        </select>
      </div>
    </form>
  )
}
