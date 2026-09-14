// Named export #1: component hiển thị nhãn trạng thái
export function NhanTrangThai({ dangMoCua }: { dangMoCua: boolean }) {
  return (
    <span
      style={{
        color: dangMoCua ? 'green' : 'crimson',
        fontWeight: 'bold',
      }}
    >
      {dangMoCua ? '● Đang mở cửa' : '● Đã đóng cửa'}
    </span>
  )
}

// Named export #2: hàm JavaScript thuần — không phải component
export function demTongSoDiaDiem(danhSach: string[]): number {
  return danhSach.length
}
