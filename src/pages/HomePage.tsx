import HeroSection from "../components/home/HeroSection"
import FeaturesSection from "../components/home/FeaturesSection"
import TimelineSection from "../components/home/TimelineSection"
import GamePreviewSection from "../components/home/GamePreviewSection"
import TestimonialsSection from "../components/home/TestimonialsSection"
import CTASection from "../components/home/CTASection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TimelineSection />
      <GamePreviewSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
