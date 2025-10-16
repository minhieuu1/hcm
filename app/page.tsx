import HeroSection from "../src/components/home/HeroSection"
import FeaturesSection from "../src/components/home/FeaturesSection"
import TimelineSection from "../src/components/home/TimelineSection"
import GamePreviewSection from "../src/components/home/GamePreviewSection"
import TestimonialsSection from "../src/components/home/TestimonialsSection"
import CTASection from "../src/components/home/CTASection"

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