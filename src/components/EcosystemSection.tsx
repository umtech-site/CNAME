import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ShoppingBag, GraduationCap, Rocket, X, BookOpen, Heart, Stethoscope,
  Monitor, Shirt, ShoppingCart, ArrowLeft, Scan, Radio, Atom, Bone,
  Radiation, Eye, Activity, BrainCircuit, Waves, CircleDot, Zap, Microscope
} from "lucide-react";

interface SubCategory {
  label: string;
  icon: typeof BookOpen;
  description: string;
  children?: SubCategory[];
}

const radiologySubjects: SubCategory[] = [
  { label: "CT Scan", icon: Scan, description: "Computed Tomography imaging techniques, cross-sectional anatomy & protocols" },
  { label: "Ultrasound", icon: Waves, description: "Sonography principles, diagnostic imaging & Doppler techniques" },
  { label: "MRI", icon: BrainCircuit, description: "Magnetic Resonance Imaging physics, sequences & clinical applications" },
  { label: "DEXA Scan", icon: Bone, description: "Dual-energy X-ray Absorptiometry for bone density measurement" },
  { label: "Nuclear Medicine", icon: Atom, description: "Radioactive tracers, PET scans & therapeutic nuclear procedures" },
  { label: "X-Ray", icon: Radiation, description: "Radiographic positioning, exposure techniques & image evaluation" },
  { label: "Fluoroscopy", icon: Eye, description: "Real-time X-ray imaging for dynamic studies & guided procedures" },
  { label: "Mammography", icon: CircleDot, description: "Specialized breast imaging techniques & screening protocols" },
  { label: "Angiography", icon: Activity, description: "Vascular imaging, catheter-based procedures & interventional radiology" },
  { label: "Radiation Therapy", icon: Zap, description: "Therapeutic radiation planning, dosimetry & patient care" },
  { label: "Radiobiology", icon: Microscope, description: "Biological effects of radiation on living tissue & safety principles" },
  { label: "Radiographic Pathology", icon: Radio, description: "Disease recognition on radiographic images & clinical correlation" },
];

const medicalCategories: SubCategory[] = [
  {
    label: "Radiology Technologist",
    icon: Scan,
    description: "Complete radiology technology program with all major imaging modalities",
    children: radiologySubjects,
  },
];

const educationCategories: SubCategory[] = [
  { label: "Quran Learning", icon: BookOpen, description: "Online Quran courses with certified teachers" },
  { label: "Ethics", icon: Heart, description: "Moral philosophy, professional ethics, and values" },
  {
    label: "Medical",
    icon: Stethoscope,
    description: "Medical sciences, health courses, and certifications",
    children: medicalCategories,
  },
];

const shopCategories: SubCategory[] = [
  { label: "Electronics", icon: Monitor, description: "Latest gadgets, smartphones, and tech accessories" },
  { label: "Clothing", icon: Shirt, description: "Premium fashion and modern apparel" },
  { label: "Shoes", icon: ShoppingCart, description: "Footwear collection for every occasion" },
  { label: "Undergarments", icon: ShoppingBag, description: "Comfort essentials and innerwear" },
  { label: "Pants & Trousers", icon: Shirt, description: "Formal, casual, and sportswear bottoms" },
  { label: "Shirts", icon: Shirt, description: "Dress shirts, casual tees, and designer tops" },
];

const ecosystemItems = [
  {
    title: "THEUMTECH Shop",
    description: "Luxury technology marketplace for future digital products and devices.",
    icon: ShoppingBag,
    categories: shopCategories,
  },
  {
    title: "THEUMTECH Education",
    description: "Advanced learning platform offering professional courses, digital training, and knowledge hubs.",
    icon: GraduationCap,
    categories: educationCategories,
  },
  {
    title: "Future Projects",
    description: "Research, AI tools, medical technology, and innovative software solutions currently in development.",
    icon: Rocket,
    categories: null,
  },
];

const timelineItems = [
  { label: "AI Research Tools", progress: 72 },
  { label: "Medical Technology", progress: 45 },
  { label: "Smart Infrastructure", progress: 30 },
  { label: "Quantum Computing SDK", progress: 15 },
];

interface BreadcrumbItem {
  label: string;
  categories: SubCategory[];
}

const EcosystemSection = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
  const [currentCategories, setCurrentCategories] = useState<SubCategory[]>([]);

  const openModal = (index: number) => {
    setActiveModal(index);
    const cats = ecosystemItems[index].categories;
    if (cats) {
      setCurrentCategories(cats);
      setBreadcrumbs([{ label: ecosystemItems[index].title, categories: cats }]);
    } else {
      setCurrentCategories([]);
      setBreadcrumbs([]);
    }
  };

  const closeModal = () => {
    setActiveModal(null);
    setBreadcrumbs([]);
    setCurrentCategories([]);
  };

  const drillDown = (cat: SubCategory) => {
    if (cat.children && cat.children.length > 0) {
      setBreadcrumbs((prev) => [...prev, { label: cat.label, categories: cat.children! }]);
      setCurrentCategories(cat.children);
    }
  };

  const navigateBreadcrumb = (index: number) => {
    const newBreadcrumbs = breadcrumbs.slice(0, index + 1);
    setBreadcrumbs(newBreadcrumbs);
    setCurrentCategories(newBreadcrumbs[newBreadcrumbs.length - 1].categories);
  };

  const goBack = () => {
    if (breadcrumbs.length > 1) {
      navigateBreadcrumb(breadcrumbs.length - 2);
    }
  };

  // Determine if we're showing radiology-level subjects (large grid)
  const isDeepLevel = breadcrumbs.length >= 3;

  return (
    <section id="ecosystem" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-primary">Our Ecosystem</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Built for the <span className="text-gradient">Future</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {ecosystemItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onClick={() => openModal(i)}
              className="glass-card-hover glow-border cursor-pointer p-8 md:p-10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>

              {i === 2 && (
                <div className="mt-6 space-y-3">
                  {timelineItems.map((t) => (
                    <div key={t.label}>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{t.label}</span>
                        <span className="text-primary">{t.progress}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-glow-cyan to-glow-blue"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${t.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/80 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="glass-card glow-border relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Breadcrumb Navigation */}
              {breadcrumbs.length > 0 && (
                <div className="mb-6 flex items-center gap-2 flex-wrap">
                  {breadcrumbs.length > 1 && (
                    <button
                      onClick={goBack}
                      className="mr-1 flex items-center gap-1 rounded-lg border border-border/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      Back
                    </button>
                  )}
                  {breadcrumbs.map((crumb, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {idx > 0 && <span className="text-muted-foreground/50 text-xs">/</span>}
                      <button
                        onClick={() => navigateBreadcrumb(idx)}
                        className={`text-xs font-medium transition-colors ${
                          idx === breadcrumbs.length - 1
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {crumb.label}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Header */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  {(() => {
                    const Icon = ecosystemItems[activeModal].icon;
                    return <Icon className="h-6 w-6 text-primary" />;
                  })()}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {breadcrumbs.length > 1 ? breadcrumbs[breadcrumbs.length - 1].label : ecosystemItems[activeModal].title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {breadcrumbs.length > 1
                      ? `${breadcrumbs.map((b) => b.label).join(" › ")}`
                      : ecosystemItems[activeModal].description}
                  </p>
                </div>
              </div>

              {/* Sub-categories grid */}
              {currentCategories.length > 0 && (
                <motion.div
                  key={breadcrumbs.map((b) => b.label).join("-")}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`grid gap-4 ${
                    isDeepLevel ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "sm:grid-cols-2"
                  }`}
                >
                  {currentCategories.map((cat, idx) => (
                    <motion.div
                      key={cat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                      onClick={() => drillDown(cat)}
                      className={`group rounded-xl border border-border/60 bg-secondary/30 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_20px_hsl(var(--primary)/0.12)] ${
                        cat.children ? "cursor-pointer" : ""
                      }`}
                    >
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <cat.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="mb-1 font-display text-sm font-semibold text-foreground">{cat.label}</h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">{cat.description}</p>
                      {cat.children && (
                        <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-primary/70">
                          {cat.children.length} subjects →
                        </p>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Timeline for Future Projects */}
              {activeModal === 2 && (
                <div className="space-y-3">
                  {timelineItems.map((t, idx) => (
                    <motion.div
                      key={t.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{t.label}</span>
                        <span className="text-primary">{t.progress}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-glow-cyan to-glow-blue"
                          initial={{ width: 0 }}
                          animate={{ width: `${t.progress}%` }}
                          transition={{ duration: 1.2, delay: idx * 0.15 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EcosystemSection;
