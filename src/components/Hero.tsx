const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide text-foreground mb-6 opacity-0 animate-fade-in">
            Handcrafted
            <br />
            <span className="italic text-accent">Ceramics</span>
          </h1>
          
          <p className="text-lg md:text-xl font-sans font-light text-muted-foreground max-w-xl mx-auto mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Each piece tells a story of patience, precision, and the timeless beauty of clay transformed by fire.
          </p>
          
          <button
            onClick={() => {
              document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 text-sm font-sans font-light tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors group opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <span>View Collection</span>
            <span className="w-12 h-px bg-foreground/40 group-hover:w-20 group-hover:bg-foreground transition-all duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-px h-16 bg-gradient-to-b from-foreground/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
