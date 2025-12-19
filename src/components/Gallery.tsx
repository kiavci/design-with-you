import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Placeholder artwork data - to be replaced with real images
const artworks = [
  {
    id: 1,
    title: "Earth Vessel",
    category: "Vases",
    description: "Hand-thrown stoneware with natural ash glaze",
    images: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=90",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=90",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=90",
    ],
  },
  {
    id: 2,
    title: "Morning Cup",
    category: "Cups",
    description: "Delicate porcelain tea cup with celadon glaze",
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=90",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=90",
    ],
  },
  {
    id: 3,
    title: "Ritual Bowl",
    category: "Bowls",
    description: "Textured stoneware with iron oxide finish",
    images: [
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=800&q=90",
      "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=800&q=90",
    ],
  },
  {
    id: 4,
    title: "Silent Form",
    category: "Sculptures",
    description: "Abstract sculptural piece in raw clay",
    images: [
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&q=90",
    ],
  },
  {
    id: 5,
    title: "Dusk Plate",
    category: "Plates",
    description: "Dinner plate with gradient glaze effect",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=90",
      "https://images.unsplash.com/photo-1525974160448-038dacadcc71?w=800&q=90",
    ],
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  const openLightbox = (artwork: typeof artworks[0]) => {
    setSelectedArtwork(artwork);
    setLightboxImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedArtwork(null);
    setLightboxImageIndex(0);
  };

  const nextLightboxImage = () => {
    if (selectedArtwork) {
      setLightboxImageIndex((prev) => (prev + 1) % selectedArtwork.images.length);
    }
  };

  const prevLightboxImage = () => {
    if (selectedArtwork) {
      setLightboxImageIndex((prev) => (prev - 1 + selectedArtwork.images.length) % selectedArtwork.images.length);
    }
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-foreground mb-4">
            The Collection
          </h2>
          <p className="text-muted-foreground font-sans font-light max-w-lg mx-auto">
            Explore unique pieces crafted with intention and care
          </p>
        </div>

        {/* Featured Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
            <img
              src={artworks[currentIndex].images[0]}
              alt={artworks[currentIndex].title}
              className="w-full h-full object-cover cursor-pointer transition-transform duration-700 hover:scale-105"
              onClick={() => openLightbox(artworks[currentIndex])}
            />
            
            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-foreground/60 to-transparent">
              <span className="text-xs font-sans tracking-widest uppercase text-primary-foreground/70 mb-2 block">
                {artworks[currentIndex].category}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-light text-primary-foreground mb-2">
                {artworks[currentIndex].title}
              </h3>
              <p className="text-sm font-sans font-light text-primary-foreground/80">
                {artworks[currentIndex].description}
              </p>
            </div>

            {/* Click hint */}
            <div className="absolute top-6 right-6 text-xs font-sans tracking-wider uppercase text-primary-foreground/60 bg-foreground/20 px-3 py-1.5 backdrop-blur-sm">
              Click to view details
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 text-sm font-sans tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Previous</span>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {artworks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-foreground w-8"
                      : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center gap-2 text-sm font-sans tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span>Next</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16">
          {artworks.map((artwork, index) => (
            <button
              key={artwork.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-square overflow-hidden group ${
                index === currentIndex ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : ""
              }`}
            >
              <img
                src={artwork.images[0]}
                alt={artwork.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main lightbox image */}
            <div className="relative aspect-[4/3] bg-background/10">
              <img
                src={selectedArtwork.images[lightboxImageIndex]}
                alt={`${selectedArtwork.title} - View ${lightboxImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Lightbox navigation */}
            {selectedArtwork.images.length > 1 && (
              <>
                <button
                  onClick={prevLightboxImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground bg-foreground/20 hover:bg-foreground/40 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={nextLightboxImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground bg-foreground/20 hover:bg-foreground/40 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-sans text-primary-foreground/60">
                  {lightboxImageIndex + 1} / {selectedArtwork.images.length}
                </div>
              </>
            )}

            {/* Artwork info in lightbox */}
            <div className="mt-6 text-center">
              <span className="text-xs font-sans tracking-widest uppercase text-primary-foreground/50 mb-2 block">
                {selectedArtwork.category}
              </span>
              <h3 className="text-2xl font-serif font-light text-primary-foreground mb-2">
                {selectedArtwork.title}
              </h3>
              <p className="text-sm font-sans font-light text-primary-foreground/70">
                {selectedArtwork.description}
              </p>
            </div>

            {/* Thumbnail strip */}
            {selectedArtwork.images.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {selectedArtwork.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightboxImageIndex(idx)}
                    className={`w-16 h-16 overflow-hidden transition-all ${
                      idx === lightboxImageIndex
                        ? "ring-2 ring-primary-foreground"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${selectedArtwork.title} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
