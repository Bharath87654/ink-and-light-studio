import { useState } from "react";

interface ArtworkCardProps {
  src: string;
  title: string;
  artist: string;
  price?: number;
  className?: string;
  onClick?: () => void;
}

const ArtworkCard = ({ src, title, artist, price, className = "", onClick }: ArtworkCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={`gallery-frame cursor-pointer group perspective ${className}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-gallery-frame p-4 transform-3d transition-all duration-500 hover:scale-105">
        {/* Image Container */}
        <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-md bg-muted">
          <img
            src={src}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
            } group-hover:scale-110`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gallery-shadow/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Artwork Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">by {artist}</p>
          {price && (
            <p className="text-lg font-bold text-accent">${price}</p>
          )}
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </div>
    </div>
  );
};

export default ArtworkCard;