import { useState } from "react";
import Navigation from "@/components/Navigation";
import ArtworkCard from "@/components/ArtworkCard";
import FloatingElements from "@/components/FloatingElements";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ShoppingCart, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import artwork1 from "@/assets/artwork1.png";
import artwork2 from "@/assets/artwork2.png";
import artwork3 from "@/assets/artwork3.png";

interface StoreItem {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  available: boolean;
}

const storeItems: StoreItem[] = [
  {
    id: 1,
    title: "Demon Slayer",
    image: "/lovable-uploads/d139182f-73fa-45f3-8b1a-2fccdf9f9588.png",
    price: 180,
    description: "Original hand-drawn Demon Slayer artwork featuring incredible detail and masterful pencil shading. A stunning piece showcasing the intensity of the character.",
    available: true,
  },
  {
    id: 2,
    title: "Mysterious Warrior",
    image: "/lovable-uploads/f03e6951-8889-41fa-98c2-ef8f8b87f19d.png",
    price: 200,
    description: "An enigmatic warrior character brought to life through intricate pencil work. This piece showcases exceptional detail in armor and atmospheric shading.",
    available: true,
  },
  {
    id: 3,
    title: "Black Clover",
    image: "/lovable-uploads/193bb680-4953-45b8-8389-45e11baf24c8.png",
    price: 220,
    description: "A dynamic Black Clover character portrait with amazing detail and vibrant red accent highlights. This artwork captures the spirit and energy of the series.",
    available: true,
  },
  {
    id: 4,
    title: "Tokyo Ghoul",
    image: "/lovable-uploads/3ec3c6c6-4e4b-4f2e-b9e3-ac4da53d1a2a.png",
    price: 190,
    description: "A haunting Tokyo Ghoul character with striking red details and masterful shading technique. This piece perfectly captures the dark atmosphere of the series.",
    available: true,
  },
  {
    id: 5,
    title: "Elegant Portrait",
    image: "/lovable-uploads/f019f69a-965f-4242-98ab-1466686dd663.png",
    price: 150,
    description: "A graceful anime character portrait with soft features and delicate pencil work. This artwork demonstrates the gentle side of character illustration.",
    available: true,
  },
  {
    id: 6,
    title: "Winter Character",
    image: "/lovable-uploads/2086ea3c-f663-4eca-9689-b3f4d14b253a.png",
    price: 160,
    description: "A beautiful winter-themed character with flowing hair and gentle expression. The soft shading creates a warm, intimate feeling.",
    available: true,
  },
  {
    id: 7,
    title: "Luffy",
    image: "/lovable-uploads/43f5486b-79dd-416f-9e7d-ff321391aff1.png",
    price: 250,
    description: "A vibrant One Piece Luffy artwork with dynamic energy and colorful highlights. This piece showcases the artist's ability to work with both pencil and color.",
    available: true,
  },
  {
    id: 8,
    title: "Friendship",
    image: "/lovable-uploads/77b742c8-4b19-435b-9af3-96f0a21ef082.png",
    price: 180,
    description: "A heartwarming portrait of two characters showcasing the bond of friendship. The detailed pencil work brings out the emotion in their expressions.",
    available: true,
  },
];

const Store = () => {
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);
  const { toast } = useToast();

  const handleAddToCart = (item: StoreItem) => {
    toast({
      title: "Added to Cart!",
      description: `${item.title} has been added to your cart.`,
    });
  };

  const handlePurchase = (item: StoreItem) => {
    toast({
      title: "Purchase Initiated",
      description: "Redirecting to secure checkout...",
    });
    // Here you would integrate with Stripe or PayPal
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      <FloatingElements />
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 animate-fadeInUp">
              Art Store
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Own a piece of original hand-drawn artwork by Bharath Kumar
            </p>
          </div>

          {/* Store Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {storeItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ArtworkCard
                  src={item.image}
                  title={item.title}
                  artist="Bharath Kumar"
                  price={item.price}
                  onClick={() => setSelectedItem(item)}
                />
              </div>
            ))}
          </div>

          {/* Store Info */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Original Artwork</h2>
              <p className="text-muted-foreground mb-6">
                Each piece is an original hand-drawn artwork, carefully crafted with premium materials. 
                All artworks are signed by the artist and come with a certificate of authenticity.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-accent mb-2">Materials</h3>
                  <p className="text-muted-foreground">Premium drawing paper, professional pencils</p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-2">Size</h3>
                  <p className="text-muted-foreground">A4 (210 × 297 mm)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-2">Shipping</h3>
                  <p className="text-muted-foreground">Worldwide, carefully packaged</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Item Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl bg-card border-border">
          <DialogTitle className="sr-only">
            {selectedItem?.title}
          </DialogTitle>
          {selectedItem && (
            <div className="grid md:grid-cols-2 gap-8 p-6">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gallery-frame">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold gradient-text mb-2">
                    {selectedItem.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">by Bharath Kumar</p>
                  <p className="text-2xl font-bold text-accent mt-4">${selectedItem.price}</p>
                </div>
                
                <p className="text-foreground leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="space-y-3">
                  <Button 
                    onClick={() => handlePurchase(selectedItem)}
                    className="w-full glow-effect"
                    size="lg"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy Now - ${selectedItem.price}
                  </Button>
                  
                  <Button 
                    onClick={() => handleAddToCart(selectedItem)}
                    variant="outline"
                    className="w-full"
                    size="lg"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Add to Wishlist
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• Original hand-drawn artwork</p>
                  <p>• Signed by the artist</p>
                  <p>• Certificate of authenticity included</p>
                  <p>• Carefully packaged and shipped worldwide</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Store;