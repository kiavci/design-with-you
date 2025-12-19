const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=90"
                alt="Ceramic artist at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs font-sans tracking-widest uppercase text-accent mb-4 block">
              The Artist
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-foreground mb-8">
              Shaped by
              <br />
              <span className="italic">Tradition</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-sans font-light leading-relaxed">
              <p>
                For over a decade, I have dedicated my practice to the ancient art of ceramics, 
                finding profound meaning in the meditative rhythm of the wheel and the 
                transformative power of fire.
              </p>
              <p>
                Each piece begins as a simple ball of clay and evolves through countless hours 
                of shaping, trimming, and glazing. I draw inspiration from organic forms found 
                in nature—the curve of a river stone, the texture of tree bark, the gentle 
                gradient of a sunset sky.
              </p>
              <p>
                My studio practice honors traditional techniques passed down through generations, 
                while embracing contemporary aesthetics that speak to modern living. Every vessel 
                is intended not just for display, but for daily use and quiet appreciation.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="font-serif italic text-2xl text-foreground mb-2">Studio Clay</p>
              <p className="text-sm font-sans text-muted-foreground">
                Handcrafted with intention
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy section */}
        <div className="grid md:grid-cols-3 gap-12 mt-24 pt-24 border-t border-border">
          <div className="text-center">
            <span className="text-5xl font-serif font-light text-accent mb-4 block">01</span>
            <h3 className="text-xl font-serif font-light text-foreground mb-3">Form</h3>
            <p className="text-sm font-sans font-light text-muted-foreground leading-relaxed">
              Each piece explores the balance between function and beauty, 
              honoring the natural properties of clay.
            </p>
          </div>
          <div className="text-center">
            <span className="text-5xl font-serif font-light text-accent mb-4 block">02</span>
            <h3 className="text-xl font-serif font-light text-foreground mb-3">Process</h3>
            <p className="text-sm font-sans font-light text-muted-foreground leading-relaxed">
              Slow, deliberate craftsmanship guides every creation from raw earth 
              to fired finish.
            </p>
          </div>
          <div className="text-center">
            <span className="text-5xl font-serif font-light text-accent mb-4 block">03</span>
            <h3 className="text-xl font-serif font-light text-foreground mb-3">Purpose</h3>
            <p className="text-sm font-sans font-light text-muted-foreground leading-relaxed">
              Objects made for everyday rituals—the morning tea, the evening meal, 
              moments of quiet presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
