import { HISTORICAL_PERIODS } from "../../config/constants"
import SectionHeader from "../ui/SectionHeader"

export default function TimelineSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Dòng Thời Gian Lịch Sử"
          subtitle="Những sự kiện quan trọng định hình thời kỳ bao cấp Việt Nam"
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {HISTORICAL_PERIODS.map((period, index) => (
                <div key={period.year} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background"></div>

                  {/* Content */}
                  <div
                    className={`ml-20 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div className="bg-card p-6 border-2 border-border shadow-lg hover:shadow-xl transition-shadow">
                      <div className="font-heading text-3xl font-bold text-primary mb-2">{period.year}</div>
                      <p className="text-foreground leading-relaxed">{period.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
