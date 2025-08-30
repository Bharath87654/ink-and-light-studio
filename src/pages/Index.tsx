import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ArtworkCard from "@/components/ArtworkCard";
import FloatingElements from "@/components/FloatingElements";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Heart, Star } from "lucide-react";
import artwork1 from "@/assets/artwork1.png";
import artwork2 from "@/assets/artwork2.png";
import artwork3 from "@/assets/artwork3.png";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const featuredArtworks = [
    { id: 1, title: "Demon Slayer", image: "/lovable-uploads/d139182f-73fa-45f3-8b1a-2fccdf9f9588.png" },
    { id: 2, title: "Black Clover", image: "/lovable-uploads/193bb680-4953-45b8-8389-45e11baf24c8.png" },
    { id: 3, title: "Tokyo Ghoul", image: "/lovable-uploads/3ec3c6c6-4e4b-4f2e-b9e3-ac4da53d1a2a.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-primary overflow-hidden">
      <FloatingElements />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className={`space-y-8 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold gradient-text leading-tight">
              Bharath Kumar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Hand-drawn masterpieces that bring anime characters to life through the timeless art of pencil and paper
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="glow-effect group">
                <Link to="/gallery">
                  Explore Gallery
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">About the Artist</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Featured Artworks
            </h2>
            <p className="text-xl text-muted-foreground">
              A glimpse into the artistic world of detailed character illustrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredArtworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className={`float-animation ${mounted ? 'animate-scaleIn' : 'opacity-0'}`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${6 + index}s`
                }}
              >
                <ArtworkCard
                  src={artwork.image}
                  title={artwork.title}
                  artist="Bharath Kumar"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/gallery">
                View All Artworks
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Artist Philosophy Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Palette className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Artistic Vision</h3>
                <p className="text-muted-foreground">
                  Every stroke tells a story, capturing the essence of characters with meticulous detail.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Passion Driven</h3>
                <p className="text-muted-foreground">
                  Born from a deep love for anime art and the timeless medium of pencil drawing.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Unique Style</h3>
                <p className="text-muted-foreground">
                  Blending traditional techniques with contemporary character design and storytelling.
                </p>
              </div>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-light text-foreground italic mb-8">
              "Art is not what you see, but what you make others see."
            </blockquote>
            
            <Button asChild variant="default" size="lg" className="glow-effect">
              <Link to="/about">Learn More About the Artist</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
