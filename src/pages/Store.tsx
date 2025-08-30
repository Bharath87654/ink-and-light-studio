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
    title: "Intensity",
    image: artwork1,
    price: 150,
    description: "Original hand-drawn artwork featuring a powerful anime character with dramatic expression. Rendered in high-quality pencil with red accents on premium paper.",
    available: true,
  },
  {
    id: 2,
    title: "Mystery",
    image: artwork2,
    price: 175,
    description: "An enigmatic masked character brought to life through intricate pencil work. This piece showcases masterful shading and atmospheric detail.",
    available: true,
  },
  {
    id: 3,
    title: "Elegance",
    image: artwork3,
    price: 125,
    description: "A graceful portrait capturing delicate features and gentle expression. This artwork demonstrates the softer side of anime character illustration.",
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