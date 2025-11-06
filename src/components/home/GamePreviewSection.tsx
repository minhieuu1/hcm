import VintageButton from "../ui/VintageButton"
import VintageCard from "../ui/VintageCard"
import SectionHeader from "../ui/SectionHeader"
import Image from "next/image"

export default function GamePreviewSection() {
  const gameModes = [
    {
      title: "Lao Động Sản Xuất",
      description: "Tham gia các hoạt động sản xuất tập thể, hoàn thành chỉ tiêu kế hoạch để nhận tem phiếu.",
      icon: "⚙️",
    },
    {
      title: "Sản Xuất Gia Đình",
      description: "Quản lý nguồn lực gia đình, trồng trọt và chăn nuôi để bổ sung lương thực.",
      icon: "🏠",
    },
    {
      title: "Trao Đổi Hàng Hóa",
      description: "Tham gia chợ đen và trao đổi hàng hóa để có được những vật phẩm khan hiếm.",
      icon: "🤝",
    },
  ]

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <SectionHeader title="Cuộc Sống Thời Bao Cấp" subtitle="Trải nghiệm web game chiến lược độc đáo" align="left" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Game preview image */}
          {/* <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-sepia-dark to-sepia-medium rounded-lg overflow-hidden border-4 border-primary shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🎮</div>
                    <p className="font-heading text-2xl text-paper-white mb-4">Game Demo</p>
                    <p className="text-aged-cream">Sắp ra mắt</p>
                  </div>
                </div>
              </div> */}
              {/* Game preview image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-sepia-dark to-sepia-medium rounded-lg overflow-hidden border-4 border-primary shadow-2xl">
                {/* Thay thế nội dung cũ bằng hình ảnh */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  {/* Sử dụng component Image của Next.js để tối ưu hóa hình ảnh */}
                  <Image 
                    src="/QR_game.png" // Đường dẫn đến file QR_game.png trong thư mục public
                    alt="Mã QR game"
                    layout="fill" // Để hình ảnh lấp đầy div cha
                    objectFit="contain" // Đảm bảo hình ảnh được căn chỉnh và không bị cắt
                    className="rounded-lg" // Thêm các class Tailwind nếu cần
                  />
                </div>
              </div>
              {/* Decorative stamp */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary stamp-border flex items-center justify-center rotate-12 shadow-lg">
                <span className="text-primary-foreground font-bold text-sm text-center">
                  DEMO
                  <br />
                  SOON
                </span>
              </div>
            </div>
          </div>

          {/* Game modes */}
          <div className="order-1 lg:order-2 space-y-6">
            {gameModes.map((mode, index) => (
              <VintageCard key={index} className="flex gap-4 items-start">
                <div className="text-4xl flex-shrink-0">{mode.icon}</div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{mode.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{mode.description}</p>
                </div>
              </VintageCard>
            ))}

            <div className="pt-4">
              <VintageButton variant="primary" size="lg">
                Chơi Ngay
              </VintageButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
