// Application Constants

export const APP_NAME = "Tổng Cục Tem Phiếu"
export const APP_TAGLINE = "Tái Hiện Ký Ức Thời Bao Cấp 1976-1986"

export const NAVIGATION_ITEMS = [
  { id: "home", label: "Trang Chủ", path: "/" },
  { id: "game", label: "Trò Chơi", path: "/game" },
  { id: "dictionary", label: "Từ Điển", path: "/dictionary" },
  { id: "stories", label: "Câu Chuyện", path: "/stories" },
  { id: "interviews", label: "Phỏng Vấn", path: "/interviews" },
  { id: "library", label: "Thư Viện", path: "/library" },
  { id: "household", label: "Sổ Hộ Khẩu", path: "/household" },
] as const

export const RATION_TYPES = {
  rice: { label: "Gạo", unit: "kg", icon: "🌾" },
  meat: { label: "Thịt", unit: "kg", icon: "🥩" },
  sugar: { label: "Đường", unit: "kg", icon: "🧂" },
  cloth: { label: "Vải", unit: "mét", icon: "🧵" },
  oil: { label: "Dầu", unit: "lít", icon: "🛢️" },
  general: { label: "Tổng Hợp", unit: "phần", icon: "📋" },
} as const

export const CONTRIBUTION_RANKS = [
  { level: 1, name: "Công Dân", minPoints: 0, color: "#8b7355" },
  { level: 2, name: "Lao Động Tiên Tiến", minPoints: 100, color: "#4a6fa5" },
  { level: 3, name: "Chiến Sĩ Thi Đua", minPoints: 500, color: "#d4574f" },
  { level: 4, name: "Anh Hùng Lao Động", minPoints: 1000, color: "#c8102e" },
  { level: 5, name: "Anh Hùng Cách Mạng", minPoints: 5000, color: "#ffd700" },
] as const

export const HISTORICAL_PERIODS = [
  { year: 1976, event: "Thống nhất đất nước" },
  { year: 1978, event: "Chiến tranh biên giới phía Bắc" },
  { year: 1979, event: "Cải tạo xã hội chủ nghĩa" },
  { year: 1980, event: "Khủng hoảng lương thực" },
  { year: 1981, event: "Sản xuất hợp tác xã" },
  { year: 1985, event: "Chuẩn bị Đổi Mới" },
  { year: 1986, event: "Đại hội Đảng lần VI - Đổi Mới" },
] as const

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const
