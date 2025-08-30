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
    title: "Demon Slayer",
    image: "/lovable-uploads/d139182f-73fa-45f3-8b1a-2fccdf9f9588.png",
    description: "A masterful pencil drawing featuring a Demon Slayer character with incredible detail and shading.",
  },
  {
    id: 2,
    title: "Mysterious Warrior",
    image: "/lovable-uploads/f03e6951-8889-41fa-98c2-ef8f8b87f19d.png",
    description: "An enigmatic character with intricate armor and mysterious aura, beautifully rendered in pencil.",
  },
  {
    id: 3,
    title: "Black Clover",
    image: "/lovable-uploads/193bb680-4953-45b8-8389-45e11baf24c8.png",
    description: "A dynamic Black Clover character portrait with amazing detail and red accent highlights.",
  },
  {
    id: 4,
    title: "Tokyo Ghoul",
    image: "/lovable-uploads/3ec3c6c6-4e4b-4f2e-b9e3-ac4da53d1a2a.png",
    description: "A striking Tokyo Ghoul character with haunting red details and masterful shading technique.",
  },
  {
    id: 5,
    title: "Elegant Portrait",
    image: "/lovable-uploads/f019f69a-965f-4242-98ab-1466686dd663.png",
    description: "A graceful anime character portrait with soft features and delicate pencil work.",
  },
  {
    id: 6,
    title: "Winter Character",
    image: "/lovable-uploads/2086ea3c-f663-4eca-9689-b3f4d14b253a.png",
    description: "A beautiful winter-themed character with flowing hair and gentle expression.",
  },
  {
    id: 7,
    title: "Luffy",
    image: "/lovable-uploads/43f5486b-79dd-416f-9e7d-ff321391aff1.png",
    description: "A vibrant One Piece Luffy artwork with dynamic energy and colorful highlights.",
  },
  {
    id: 8,
    title: "Friendship",
    image: "/lovable-uploads/77b742c8-4b19-435b-9af3-96f0a21ef082.png",
    description: "A heartwarming portrait of two characters showcasing the bond of friendship.",
  },
  {
    id: 9,
    title: "One Piece Phone Case",
    image: "/lovable-uploads/4f494687-1c2a-4747-b907-7a4d3a3ad6bc.png",
    description: "A creative One Piece themed phone case design showing artistic versatility.",
  },
  {
    id: 10,
    title: "Hisoka",
    image: "/lovable-uploads/dbbf7b92-868f-4bfd-8f99-ec29913fd21f.png",
    description: "A colorful and dynamic Hisoka portrait with vibrant red and blue tones.",
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