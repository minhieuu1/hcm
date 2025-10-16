// Utility Helper Functions

export const formatDate = (date: string | Date): string => {
  const d = new Date(date)
  return d.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("vi-VN").format(num)
}

export const calculateRank = (points: number): string => {
  if (points >= 5000) return "Anh Hùng Cách Mạng"
  if (points >= 1000) return "Anh Hùng Lao Động"
  if (points >= 500) return "Chiến Sĩ Thi Đua"
  if (points >= 100) return "Lao Động Tiên Tiến"
  return "Công Dân"
}

export const getRankColor = (rank: string): string => {
  const colors: Record<string, string> = {
    "Công Dân": "#8b7355",
    "Lao Động Tiên Tiến": "#4a6fa5",
    "Chiến Sĩ Thi Đua": "#d4574f",
    "Anh Hùng Lao Động": "#c8102e",
    "Anh Hùng Cách Mạng": "#ffd700",
  }
  return colors[rank] || colors["Công Dân"]
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export const classNames = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(" ")
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const getYearsSince = (year: number): number => {
  return new Date().getFullYear() - year
}

export const isValidEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}
