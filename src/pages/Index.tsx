import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemeProvider } from "@/components/ThemeContext";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-background">
        <ParticleBackground />
        <ThemeSwitcher />
        <HeroSection />
        <EcosystemSection />
        <AboutSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
