// Kiểu dữ liệu dùng chung toàn ứng dụng phu-xuan-react

// Bài viết
export interface Post {
  id: number
  title: string
  excerpt: string
  content: string
  authorId: number
  publishedAt: string
  tags: string[]
}

// Người dùng
export interface User {
  id: number
  name: string
  email: string
  avatarUrl?: string
}

// Trạng thái tải dữ liệu
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

// Phản hồi API tổng quát
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}