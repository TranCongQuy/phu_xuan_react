// Tất cả hằng số tập trung ở đây

// Địa chỉ API — lấy từ biến môi trường
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000'

// Cấu hình phân trang
export const POSTS_PER_PAGE = 10

// Thời gian cache
export const CACHE_TTL = 5 * 60 * 1000

// Độ dài tối đa
export const MAX_TITLE_LENGTH = 120
export const MAX_EXCERPT_LENGTH = 200

// Tên ứng dụng
export const APP_NAME =
  import.meta.env.VITE_APP_TITLE ?? 'phu-xuan-react'