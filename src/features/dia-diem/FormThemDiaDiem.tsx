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

const DS_TIEN_ICH = [
  { ma: 'bai-xe', ten: 'Bãi đỗ xe' },
  { ma: 'huong-dan', ten: 'Có hướng dẫn viên' },
  { ma: 've-online', ten: 'Bán vé trực tuyến' },
  { ma: 'khu-ve-sinh', ten: 'Khu vệ sinh công cộng' },
]

export default function FormThemDiaDiem() {
  const [duLieu, setDuLieu] = useState<FormDuLieu>(GIA_TRI_BAN_DAU)
  const [tienIch, setTienIch] = useState<string[]>([])

  // 1 handler duy nhất cho mọi ô nhập thường (text, textarea, select, radio, checkbox)
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

  // Handler riêng cho nhóm checkbox tiện ích (state là mảng)
  function xuLyTich(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target
    setTienIch((truoc) =>
      checked ? [...truoc, value] : truoc.filter((m) => m !== value),
    )
  }

  return (
    <form className="form-them" onSubmit={(e) => e.preventDefault()} noValidate>
      <h2>Thêm địa điểm tham quan</h2>

      {/* ====== Ô 1: Tên địa điểm ====== */}
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

      {/* ====== Ô 2: Mô tả ngắn ====== */}
      <div className="truong">
        <label htmlFor="moTa">Mô tả ngắn</label>
        <textarea
          id="moTa"
          name="moTa"
          rows={4}
          value={duLieu.moTa}
          onChange={xuLyThayDoi}
          placeholder="Mô tả đôi nét về địa điểm..."
        />
      </div>

      {/* ====== Ô 3: Giá vé ====== */}
      <div className="truong">
        <label htmlFor="giaVe">Giá vé (VNĐ)</label>
        <input
          id="giaVe"
          name="giaVe"
          type="number"
          value={duLieu.giaVe}
          onChange={xuLyThayDoi}
          placeholder="0"
        />
      </div>

      {/* ====== Ô 4: Phường / xã ====== */}
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

      {/* ====== Ô 5: Loại hình (radio) ====== */}
      <fieldset>
        <legend>Loại hình</legend>
        <label>
          <input
            name="loaiHinh"
            type="radio"
            value="di-tich"
            checked={duLieu.loaiHinh === 'di-tich'}
            onChange={xuLyThayDoi}
          />
          Di tích lịch sử
        </label>
        <label>
          <input
            name="loaiHinh"
            type="radio"
            value="am-thuc"
            checked={duLieu.loaiHinh === 'am-thuc'}
            onChange={xuLyThayDoi}
          />
          Điểm ẩm thực
        </label>
      </fieldset>

      {/* ====== Nhóm checkbox tiện ích ====== */}
      <fieldset>
        <legend>Tiện ích tại điểm đến</legend>
        {DS_TIEN_ICH.map((ti) => (
          <label key={ti.ma}>
            <input
              type="checkbox"
              value={ti.ma}
              checked={tienIch.includes(ti.ma)}
              onChange={xuLyTich}
            />
            {ti.ten}
          </label>
        ))}
      </fieldset>

      {/* ====== Ô 6: Xác nhận ====== */}
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem',
        }}
      >
        <input
          name="dongY"
          type="checkbox"
          checked={duLieu.dongY}
          onChange={xuLyThayDoi}
        />
        Tôi xác nhận thông tin địa điểm là chính xác
      </label>

      {/* ====== Debug tạm — xoá khi sang Lab 3 ====== */}
      <pre
        style={{
          background: '#f1f5f9',
          padding: '1rem',
          borderRadius: 8,
          fontSize: '0.8rem',
          overflow: 'auto',
          maxHeight: 200,
        }}
      >
        {JSON.stringify({ ...duLieu, tienIch }, null, 2)}
      </pre>
    </form>
  )
}
