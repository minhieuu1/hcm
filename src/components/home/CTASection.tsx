import VintageButton from "../ui/VintageButton"

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Đăng Ký Sổ Hộ Khẩu Kỹ Thuật Số
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
            Tham gia cộng đồng, tích lũy điểm cống hiến, tăng thứ hạng và mở khóa các đặc quyền độc quyền
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <VintageButton variant="secondary" size="lg">
              Đăng Ký Ngay
            </VintageButton>
            <VintageButton
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Xem Bảng Xếp Hạng
            </VintageButton>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "⭐", title: "Tích Điểm", desc: "Nhận điểm cống hiến" },
              { icon: "🏆", title: "Thăng Hạng", desc: "Nâng cao địa vị" },
              { icon: "🎁", title: "Đặc Quyền", desc: "Mở khóa phần thưởng" },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-mono text-sm uppercase tracking-wider font-bold mb-1">{benefit.title}</h3>
                <p className="text-sm opacity-80">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
