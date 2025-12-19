const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl text-foreground mb-1">Studio Clay</p>
            <p className="text-xs font-sans text-muted-foreground">
              Handcrafted ceramics
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#gallery"
              className="text-xs font-sans tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </a>
            <a
              href="#about"
              className="text-xs font-sans tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-xs font-sans tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          <p className="text-xs font-sans text-muted-foreground">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
