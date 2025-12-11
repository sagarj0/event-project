import { HeroSection } from '@/components/home-page/hero-section';
import { AboutSection } from '@/components/home-page/about-section';
import { WhyChooseKOISection } from '@/components/home-page/why-choose-koi-section';
import { FeaturesSection } from '@/components/home-page/features-section';
import { TestimonialsSection } from '@/components/home-page/testimonials-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <WhyChooseKOISection />
      <TestimonialsSection />
    </>
  );
}
