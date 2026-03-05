import { motion } from "framer-motion";

const AboutSection = () => (
  <section className="relative section-padding">
    <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-glow-blue/5 blur-[100px]" />
    <div className="mx-auto max-w-3xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-primary">About Us</p>
        <h2 className="mb-8 font-display text-4xl font-bold md:text-5xl">
          About <span className="text-gradient">THEUMTECH</span>
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-lg leading-relaxed text-muted-foreground"
      >
        THEUMTECH is a visionary technology ecosystem dedicated to bridging the gap between commerce,
        education, and emerging technology. Our mission is to create a unified global platform
        that empowers individuals and businesses through cutting-edge digital solutions,
        AI-driven tools, and premium learning experiences — building the foundation for
        tomorrow's digital world.
      </motion.p>
    </div>
  </section>
);

export default AboutSection;
