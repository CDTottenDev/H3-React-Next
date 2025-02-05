import About from '@/components/about/about';
import BackgroundLogo from '@/components/backgroundLogo';
import FeaturedProjects from '@/components/feat-projects/feat-projects';
import Footer from '@/components/footer';
import Hero from '@/components/hero/hero';
import PageBreak from '@/components/pagebreak';
import ServicesInfo from '@/components/services/servicesinfo';
import Testimonials from '@/components/testimonials/testimonials';

export default function Home() {
  return (
    <section>
      <BackgroundLogo />
      <Hero />
      <PageBreak />
      <ServicesInfo />
      <PageBreak />
      <FeaturedProjects />
      <PageBreak />
      <About />
      <PageBreak />
      <Testimonials />
      <PageBreak />
      <Footer />
    </section>
  );
}
