import type { DictionaryEntry, Story, Interview, MediaItem, LeaderboardEntry, HouseholdRecord } from "../types"

export const mockDictionaryEntries: DictionaryEntry[] = [
  {
    id: "1",
    term: "Tem Phiếu",
    definition:
      "Phiếu do nhà nước cấp phát để người dân có thể mua hàng hóa thiết yếu theo định lượng. Mỗi loại hàng hóa có một loại tem riêng.",
    context:
      "Trong thời kỳ bao cấp, tem phiếu là công cụ phân phối chính để đảm bảo công bằng xã hội khi nguồn cung khan hiếm.",
    relatedTerms: ["Sổ Tem", "Định Lượng", "Phân Phối"],
    examples: ["Tem gạo", "Tem thịt", "Tem đường", "Tem vải"],
  },
  {
    id: "2",
    term: "Hợp Tác Xã",
    definition:
      "Tổ chức kinh tế tập thể do nhà nước thành lập, tập hợp nhiều hộ nông dân cùng sản xuất và phân phối theo chế độ tập thể.",
    context:
      "Hợp tác xã là hình thức tổ chức sản xuất chủ đạo trong nông nghiệp thời bao cấp, nhằm tăng năng suất và kiểm soát sản xuất.",
    relatedTerms: ["Tập Thể Hóa", "Công Điểm", "Phân Phối Theo Lao Động"],
    examples: ["Hợp tác xã nông nghiệp", "Hợp tác xã thủ công nghiệp"],
  },
  {
    id: "3",
    term: "Công Điểm",
    definition:
      "Đơn vị tính công lao động trong hợp tác xã. Mỗi ngày công được quy đổi thành một số công điểm nhất định để tính toán phân phối.",
    context: "Công điểm là cơ sở để phân phối thu nhập trong hợp tác xã, phản ánh số lượng và chất lượng lao động.",
    relatedTerms: ["Hợp Tác Xã", "Ngày Công", "Phân Phối"],
  },
  {
    id: "4",
    term: "Chợ Đen",
    definition:
      "Thị trường tự do không chính thức nơi người dân trao đổi, mua bán hàng hóa ngoài hệ thống phân phối nhà nước.",
    context:
      "Chợ đen phát triển do sự khan hiếm hàng hóa và nhu cầu trao đổi tự do của người dân, mặc dù bị cấm nhưng vẫn tồn tại.",
    relatedTerms: ["Buôn Lậu", "Trao Đổi Tự Do", "Giá Chợ Đen"],
  },
  {
    id: "5",
    term: "Kế Hoạch Hóa Tập Trung",
    definition:
      "Hệ thống quản lý kinh tế trong đó nhà nước quyết định toàn bộ hoạt động sản xuất, phân phối và tiêu dùng theo kế hoạch.",
    context:
      "Kế hoạch hóa tập trung là đặc trưng của nền kinh tế bao cấp, nhằm kiểm soát và phân bổ nguồn lực theo mục tiêu chính trị.",
    relatedTerms: ["Bao Cấp", "Kế Hoạch 5 Năm", "Kinh Tế Tập Trung"],
  },
]

export const mockStories: Story[] = [
  {
    id: "1",
    title: "Ngày Mua Thịt",
    author: "Nguyễn Thị Lan",
    date: "2024-01-15",
    content:
      "Sáng sớm, mẹ tôi đã thức dậy từ 4 giờ để xếp hàng mua thịt. Với tấm tem thịt quý giá trong tay, mẹ phải chờ đợi hơn 3 tiếng đồng hồ. Khi đến lượt, người bán cân đúng 500 gram - không hơn, không kém. Đó là khẩu phần thịt cho cả gia đình 5 người trong cả tháng...",
    category: "daily-life",
    tags: ["tem phiếu", "mua sắm", "gia đình"],
    featured: true,
  },
  {
    id: "2",
    title: "Công Điểm Cuối Năm",
    author: "Trần Văn Minh",
    date: "2024-01-10",
    content:
      "Cuối năm là lúc hợp tác xã tính công điểm. Bố tôi làm cả năm được 280 công điểm. Mỗi công điểm được quy đổi thành 3kg thóc và 5000 đồng. Gia đình chúng tôi nhận được 840kg thóc và 1.4 triệu đồng - đủ để sống qua năm mới...",
    category: "work",
    tags: ["hợp tác xã", "công điểm", "thu nhập"],
    featured: true,
  },
  {
    id: "3",
    title: "Chuyến Đi Chợ Đen",
    author: "Lê Thị Hoa",
    date: "2024-01-05",
    content:
      "Tối hôm đó, chị tôi lén lút đi chợ đen để đổi chiếc áo len lấy 2kg đường. Giá chợ đen cao gấp 5 lần giá tem phiếu, nhưng không có tem thì không mua được. Chị phải đi đường vòng, tránh công an tuần tra...",
    category: "daily-life",
    tags: ["chợ đen", "trao đổi", "khan hiếm"],
    featured: false,
  },
]

export const mockInterviews: Interview[] = [
  {
    id: "1",
    interviewee: "Ông Nguyễn Văn Thành",
    role: "Cựu Trưởng Hợp Tác Xã",
    date: "2024-01-20",
    location: "Hà Nội",
    transcript:
      "Thời đó, chúng tôi phải quản lý hơn 200 hộ nông dân. Mỗi ngày phải phân công lao động, tính công điểm, theo dõi sản xuất. Khó khăn nhất là khi mùa màng thất bát, phải tìm cách phân phối công bằng cho mọi người...",
    highlights: [
      "Quản lý hợp tác xã với hơn 200 hộ",
      "Thách thức trong phân phối công bằng",
      "Kinh nghiệm vượt qua khó khăn",
    ],
  },
  {
    id: "2",
    interviewee: "Bà Trần Thị Mai",
    role: "Nhân Viên Cửa Hàng Tem Phiếu",
    date: "2024-01-18",
    location: "TP. Hồ Chí Minh",
    transcript:
      "Tôi làm việc tại cửa hàng tem phiếu từ năm 1978 đến 1986. Mỗi ngày phải kiểm tra hàng trăm tấm tem, cân đong chính xác từng gram. Người dân rất trân trọng tem phiếu, có người còn giữ tem như giữ vàng...",
    highlights: [
      "8 năm làm việc tại cửa hàng tem phiếu",
      "Quy trình kiểm tra và phân phối nghiêm ngặt",
      "Giá trị của tem phiếu trong đời sống",
    ],
  },
]

export const mockMediaItems: MediaItem[] = [
  {
    id: "1",
    title: "Hàng Người Xếp Hàng Mua Gạo",
    type: "photo",
    url: "/vietnamese-people-queuing-for-rice-ration-1980s-vi.jpg",
    description: "Người dân xếp hàng dài chờ mua gạo theo tem phiếu tại Hà Nội, năm 1982",
    date: "1982-03-15",
    tags: ["tem phiếu", "hàng đợi", "gạo", "hà nội"],
    collection: "Đời Sống Hàng Ngày",
  },
  {
    id: "2",
    title: "Hợp Tác Xã Nông Nghiệp",
    type: "photo",
    url: "/vietnamese-cooperative-farm-workers-1980s-vintage-.jpg",
    description: "Nông dân làm việc tại hợp tác xã, tỉnh Thái Bình, năm 1980",
    date: "1980-07-20",
    tags: ["hợp tác xã", "nông nghiệp", "lao động"],
    collection: "Sản Xuất",
  },
  {
    id: "3",
    title: "Cửa Hàng Tem Phiếu",
    type: "photo",
    url: "/vietnamese-ration-stamp-store-1980s-vintage-sepia.jpg",
    description: "Bên trong một cửa hàng tem phiếu tại TP. Hồ Chí Minh, năm 1985",
    date: "1985-11-10",
    tags: ["cửa hàng", "tem phiếu", "sài gòn"],
    collection: "Đời Sống Hàng Ngày",
  },
  {
    id: "4",
    title: "Gia Đình Bao Cấp",
    type: "photo",
    url: "/vietnamese-family-dinner-subsidy-period-1980s-vint.jpg",
    description: "Bữa cơm gia đình với khẩu phần phân phối, năm 1983",
    date: "1983-12-25",
    tags: ["gia đình", "bữa ăn", "đời sống"],
    collection: "Đời Sống Hàng Ngày",
  },
  {
    id: "5",
    title: "Tem Phiếu Các Loại",
    type: "photo",
    url: "/vietnamese-ration-stamps-collection-1980s-vintage.jpg",
    description: "Bộ sưu tập các loại tem phiếu: gạo, thịt, đường, vải",
    date: "1984-06-01",
    tags: ["tem phiếu", "bộ sưu tập", "tài liệu"],
    collection: "Tài Liệu Lịch Sử",
  },
  {
    id: "6",
    title: "Chợ Đen",
    type: "photo",
    url: "/vietnamese-black-market-1980s-vintage-sepia.jpg",
    description: "Hoạt động trao đổi hàng hóa tại chợ tự do, năm 1981",
    date: "1981-09-15",
    tags: ["chợ đen", "trao đổi", "kinh tế"],
    collection: "Kinh Tế",
  },
  {
    id: "7",
    title: "Tuyên Truyền Kế Hoạch",
    type: "document",
    url: "/dh-lan-1-anh-dai-dien-1266-6722.jpg",
    description: "Áp phích tuyên truyền về kế hoạch 5 năm, năm 1976",
    date: "1976-01-01",
    tags: ["tuyên truyền", "kế hoạch", "chính trị"],
    collection: "Tài Liệu Lịch Sử",
  },
  {
    id: "8",
    title: "Sổ Hộ Khẩu Thời Bao Cấp",
    type: "document",
    url: "/vietnamese-household-registration-book-1980s-vinta.jpg",
    description: "Mẫu sổ hộ khẩu và sổ tem phiếu của một gia đình, năm 1979",
    date: "1979-05-20",
    tags: ["sổ hộ khẩu", "tem phiếu", "tài liệu"],
    collection: "Tài Liệu Lịch Sử",
  },
]

export const mockLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    userId: "user-001",
    name: "Nguyễn Văn Hùng",
    points: 8500,
    achievements: ["Anh Hùng Lao Động", "Chiến Sĩ Thi Đua Xuất Sắc", "Gương Mẫu Cộng Đồng"],
    badge: "🏆",
  },
  {
    rank: 2,
    userId: "user-002",
    name: "Trần Thị Lan",
    points: 7200,
    achievements: ["Anh Hùng Lao Động", "Lao Động Tiên Tiến"],
    badge: "🥈",
  },
  {
    rank: 3,
    userId: "user-003",
    name: "Lê Minh Tuấn",
    points: 6800,
    achievements: ["Chiến Sĩ Thi Đua", "Gương Mẫu Gia Đình"],
    badge: "🥉",
  },
  {
    rank: 4,
    userId: "user-004",
    name: "Phạm Thị Hoa",
    points: 5500,
    achievements: ["Chiến Sĩ Thi Đua", "Lao Động Sáng Tạo"],
    badge: "⭐",
  },
  {
    rank: 5,
    userId: "user-005",
    name: "Hoàng Văn Nam",
    points: 4900,
    achievements: ["Lao Động Tiên Tiến", "Tích Cực Học Tập"],
    badge: "⭐",
  },
]

export const mockHouseholdRecord: HouseholdRecord = {
  id: "HK-001-1980",
  headOfHousehold: "Nguyễn Văn A",
  members: 5,
  address: "123 Phố Huế",
  ward: "Phường Minh Khai",
  district: "Quận Hai Bà Trưng",
  city: "Hà Nội",
  registrationDate: "1980-01-15",
  status: "active",
  contributionPoints: 3500,
  rank: 12,
  privileges: ["Ưu tiên mua hàng", "Tham gia hội nghị", "Nhận thưởng cuối năm"],
}
