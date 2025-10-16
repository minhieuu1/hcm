import SectionHeader from "../components/ui/SectionHeader"
import VintageCard from "../components/ui/VintageCard"
import VintageButton from "../components/ui/VintageButton"
import { mockInterviews } from "../data/mockData"
import { formatDate } from "../utils/helpers"

export default function InterviewsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Phỏng Vấn Nhân Chứng"
          subtitle="Lắng nghe những chia sẻ trực tiếp từ người đã sống qua thời bao cấp"
          align="left"
        />

        <div className="space-y-8">
          {mockInterviews.map((interview) => (
            <VintageCard key={interview.id} hover className="border-l-4 border-primary">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Interview Info */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <div className="w-32 h-32 bg-gradient-to-br from-sepia-dark to-sepia-medium rounded-full flex items-center justify-center text-6xl mb-4 mx-auto lg:mx-0">
                      👤
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">{interview.interviewee}</h3>
                    <p className="text-sm text-primary font-mono uppercase tracking-wider mb-4">{interview.role}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span>📅</span>
                        <span>{formatDate(interview.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span>{interview.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interview Content */}
                <div className="lg:col-span-3">
                  <div className="mb-6">
                    <h4 className="font-mono text-sm uppercase tracking-wider text-primary font-bold mb-3">
                      Điểm Nổi Bật
                    </h4>
                    <ul className="space-y-2">
                      {interview.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary mt-1 flex-shrink-0">✓</span>
                          <span className="text-foreground/80">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t-2 border-border pt-6 mb-6">
                    <h4 className="font-mono text-sm uppercase tracking-wider text-primary font-bold mb-3">
                      Trích Đoạn Phỏng Vấn
                    </h4>
                    <blockquote className="text-lg text-foreground/80 leading-relaxed italic pl-6 border-l-4 border-primary/30">
                      "{interview.transcript}"
                    </blockquote>
                  </div>

                  <div className="flex gap-4">
                    <VintageButton variant="primary">Xem Toàn Bộ</VintageButton>
                    {interview.audioUrl && (
                      <VintageButton variant="outline">
                        <span className="flex items-center gap-2">🎧 Nghe Audio</span>
                      </VintageButton>
                    )}
                  </div>
                </div>
              </div>
            </VintageCard>
          ))}
        </div>
      </div>
    </div>
  )
}
