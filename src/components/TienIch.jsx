// Named export #1
export function NhanTrangThai({ dangMoCua }) {
  return (
    <span
      style={{
        color: dangMoCua ? "green" : "crimson",
        fontWeight: "bold",
      }}
    >
      {dangMoCua ? "● Đang mở cửa" : "● Đã đóng cửa"}
    </span>
  );
}

// Named export #2
export function demTongSoDiaDiem(danhSach) {
  return danhSach.length;
}