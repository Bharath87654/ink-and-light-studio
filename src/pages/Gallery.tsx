import { useState } from "react";
import Navigation from "@/components/Navigation";
import ArtworkCard from "@/components/ArtworkCard";
import FloatingElements from "@/components/FloatingElements";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import artwork1 from "@/assets/artwork1.png";
import artwork2 from "@/assets/artwork2.png";
import artwork3 from "@/assets/artwork3.png";

interface Artwork {
  id: number;
  title: string;
  image: string;
  description: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Intensity",
    image: artwork1,
    description: "A powerful anime character portrait showcasing dramatic expression and dynamic energy through masterful pencil work.",
  },
  {
    id: 2,
    title: "Mystery",
    image: artwork2,
    description: "An enigmatic masked character rendered with intricate detail and atmospheric shading.",
  },
  {
    id: 3,
    title: "Elegance",
    image: artwork3,
    description: "A graceful female character portrait with soft, delicate features and gentle expression.",
  },
];

const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <div className="min-h-screen bg-gradient-primary">
      <FloatingElements />
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 animate-fadeInUp">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Explore the artistic journey of Bharath Kumar through hand-drawn masterpieces
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ArtworkCard
                  src={artwork.image}
                  title={artwork.title}
                  artist="Bharath Kumar"
                  onClick={() => setSelectedArtwork(artwork)}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Artwork Detail Modal */}
      <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
        <DialogContent className="max-w-4xl bg-card border-border">
          <DialogTitle className="sr-only">
            {selectedArtwork?.title}
          </DialogTitle>
          {selectedArtwork && (
            <div className="grid md:grid-cols-2 gap-8 p-6">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gallery-frame">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold gradient-text mb-2">
                    {selectedArtwork.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">by Bharath Kumar</p>
                </div>
                <p className="text-foreground leading-relaxed">
                  {selectedArtwork.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;