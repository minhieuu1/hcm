import VintageButton from "../ui/VintageButton"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary rotate-12 stamp-rotate"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-accent rotate-45 stamp-rotate"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-secondary -rotate-12 stamp-rotate"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Stamp decoration */}
          <div className="inline-block mb-8 slide-in-up">
            <div className="stamp-border px-6 py-3 bg-primary/10">
              <p className="font-mono text-sm uppercase tracking-widest text-primary">1976 - 1986</p>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground distressed-text mb-6 leading-tight slide-in-up">
            Tổng Cục
            <br />
            <span className="text-primary">Tem Phiếu</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto slide-in-up">
            Tái hiện và khám phá cuộc sống thời kỳ bao cấp Việt Nam
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto slide-in-up">
            Trải nghiệm lịch sử qua web game chiến lược, khám phá từ điển bao cấp, đọc câu chuyện đời thường, và tham
            gia hệ thống sổ hộ khẩu kỹ thuật số độc đáo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-in-up">
            <VintageButton variant="primary" size="lg">
              Bắt Đầu Trải Nghiệm
            </VintageButton>
            <VintageButton variant="outline" size="lg">
              Tìm Hiểu Thêm
            </VintageButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { number: "10+", label: "Năm Lịch Sử" },
              { number: "500+", label: "Câu Chuyện" },
              { number: "1000+", label: "Tư Liệu" },
              { number: "5000+", label: "Người Chơi" },
            ].map((stat, index) => (
              <div key={index} className="text-center stagger-item hover-lift">
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
