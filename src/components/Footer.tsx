const Footer = () => (
  <footer className="border-t border-border/50 section-padding py-12">
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
      <div>
        <span className="font-display text-xl font-bold tracking-tight">
          <span className="text-gradient">THEUM</span>
          <span className="text-foreground">TECH</span>
        </span>
      </div>
      <p className="text-sm text-muted-foreground">© THEUMTECH – Future Technology Platform</p>
      <div className="flex gap-4">
        {["X", "Li", "Gh"].map((label) => (
          <div
            key={label}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary cursor-pointer"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
