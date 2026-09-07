import {
  MAX_TITLE_LENGTH,
  MAX_EXCERPT_LENGTH,
} from '../constants'

// Định dạng ngày tháng kiểu Việt Nam
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date

  return d.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

// Rút ngắn tiêu đề
export function truncateTitle(str: string): string {
  if (str.length <= MAX_TITLE_LENGTH) return str

  return str.slice(0, MAX_TITLE_LENGTH - 3) + '...'
}

// Rút ngắn excerpt
export function truncateExcerpt(str: string): string {
  if (str.length <= MAX_EXCERPT_LENGTH) return str

  return str.slice(0, MAX_EXCERPT_LENGTH - 3) + '...'
}

// Tạo slug URL
export function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}