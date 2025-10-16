import VintageCard from "../ui/VintageCard"
import SectionHeader from "../ui/SectionHeader"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      role: "Giáo viên lịch sử",
      content:
        "Một công cụ giáo dục tuyệt vời! Học sinh của tôi rất hứng thú khi tìm hiểu về thời kỳ bao cấp qua web game và các tài liệu phong phú.",
      avatar: "👨‍🏫",
    },
    {
      name: "Trần Thị B",
      role: "Người từng sống qua thời bao cấp",
      content:
        "Trang web này đã giúp tôi nhớ lại những ký ức tuổi trẻ. Các câu chuyện và hình ảnh rất chân thực và đầy cảm xúc.",
      avatar: "👵",
    },
    {
      name: "Lê Minh C",
      role: "Sinh viên đại học",
      content: "Game rất hay và có tính giáo dục cao. Tôi hiểu rõ hơn về những khó khăn mà thế hệ ông bà đã trải qua.",
      avatar: "👨‍🎓",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="Chia Sẻ Từ Cộng Đồng" subtitle="Những trải nghiệm thực tế từ người dùng" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <VintageCard key={index} className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground font-mono">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed italic">"{testimonial.content}"</p>
            </VintageCard>
          ))}
        </div>
      </div>
    </section>
  )
}
