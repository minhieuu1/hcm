import VintageCard from "../ui/VintageCard"
import SectionHeader from "../ui/SectionHeader"

export default function FeaturesSection() {
  const features = [
    {
      icon: "🎮",
      title: "Web Game Chiến Lược",
      description:
        "Đối mặt với các sự kiện lịch sử và đưa ra quyết định để tồn tại và phát triển trong thời kỳ bao cấp.",
      link: "/game",
    },
    {
      icon: "📖",
      title: "Từ Điển Bao Cấp",
      description: "Khám phá ý nghĩa của các thuật ngữ, khái niệm và hiện tượng đặc trưng thời kỳ 1976-1986.",
      link: "/dictionary",
    },
    {
      icon: "📝",
      title: "Câu Chuyện Đời Thường",
      description: "Đọc những câu chuyện chân thực về cuộc sống hàng ngày của người dân trong thời bao cấp.",
      link: "/stories",
    },
    {
      icon: "🎤",
      title: "Phỏng Vấn Nhân Chứng",
      description: "Lắng nghe những chia sẻ trực tiếp từ những người đã sống qua giai đoạn lịch sử này.",
      link: "/interviews",
    },
    {
      icon: "📚",
      title: "Thư Viện Đa Phương Tiện",
      description: "Khám phá bộ sưu tập ảnh, video và tài liệu quý giá về thời kỳ bao cấp.",
      link: "/library",
    },
    {
      icon: "📋",
      title: "Sổ Hộ Khẩu Kỹ Thuật Số",
      description: "Tham gia hệ thống game hóa địa vị xã hội với tích điểm cống hiến và bảng xếp hạng.",
      link: "/household",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Khám Phá Tính Năng"
          subtitle="Trải nghiệm đa dạng các hoạt động để hiểu sâu hơn về thời kỳ bao cấp"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <VintageCard key={index} hover className="flex flex-col h-full">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{feature.description}</p>
              <a
                href={feature.link}
                className="font-mono text-sm uppercase tracking-wider text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
              >
                Khám Phá
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </VintageCard>
          ))}
        </div>
      </div>
    </section>
  )
}
