import { motion } from "framer-motion";
import heroDevice from "@/assets/hero-device.png";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden section-padding">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-glow-cyan/5 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-glow-blue/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Technology • Education • Innovation
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-6 font-display text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
          >
            <span className="text-gradient">THEUM</span>
            <span className="text-foreground">TECH</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Building future digital ecosystems for commerce, education, and advanced technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a href="#ecosystem" className="btn-primary-glow inline-block text-base font-semibold">
              Explore Ecosystem
            </a>
          </motion.div>
        </div>

        {/* Right - floating device */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="animate-float">
            <img
              src={heroDevice}
              alt="Futuristic technology device"
              className="mx-auto w-full max-w-lg drop-shadow-[0_0_40px_hsla(199,89%,48%,0.3)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
