import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSections } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSections } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact"; 
import { Footer } from "@/sections/Footer";


export default function Home() {
  return (
    <div >
      <Header />
      <HeroSection />
      <ProjectsSections />
      <TapeSection />
      <TestimonialsSections />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
