import About from '@/components/about/about';
import BackgroundLogo from '@/components/backgroundLogo';
import FeaturedProjects from '@/components/feat-projects/feat-projects';
import Footer from '@/components/footer';
import DevFooter from '@/components/footer-dev';
import Hero from '@/components/hero/hero';
import PageBreak from '@/components/pagebreak';
import { ServicesInfo } from '@/components/services/servicesinfo';
import Testimonials from '@/components/testimonials/testimonials';

export default async function Home() {
  return (
    <section>
      <BackgroundLogo />
      <Hero />
      <ServicesInfo id="services" />
      <PageBreak />
      <FeaturedProjects />
      <PageBreak />
      <About />
      <PageBreak />
      <Testimonials />
      <PageBreak />
      <Footer />
      <DevFooter />
    </section>
  );
}
