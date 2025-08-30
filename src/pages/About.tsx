import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <FloatingElements />
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 animate-fadeInUp">
                About the Artist
              </h1>
            </div>

            {/* Content */}
            <div className="space-y-12">
              <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl font-bold text-foreground mb-6">Bharath Kumar</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Welcome to my artistic universe. I'm Bharath Kumar, a passionate artist who brings 
                    characters to life through the timeless medium of pencil and paper. My journey began 
                    with a deep fascination for anime and manga art styles, which has evolved into a 
                    unique artistic voice that blends traditional techniques with contemporary storytelling.
                  </p>
                  
                  <p>
                    Each piece in my collection represents hours of meticulous work, where every stroke 
                    is carefully considered to capture not just the physical form, but the emotional 
                    essence of the character. I believe that true art lies in the ability to convey 
                    complex emotions through simple yet powerful imagery.
                  </p>
                  
                  <p>
                    My work is characterized by dramatic contrasts, intricate detail work, and a focus 
                    on expressive character design. Whether it's the intensity of a warrior's gaze or 
                    the gentle innocence of a peaceful moment, I strive to create art that resonates 
                    with viewers on a deeper level.
                  </p>
                </div>
              </div>

              <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-bold text-foreground mb-4">Artistic Philosophy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Art is not what you see, but what you make others see." This philosophy guides 
                  every piece I create. I believe in the power of hand-drawn art to connect with 
                  people in ways that digital art cannot. There's something magical about the 
                  texture of pencil on paper, the subtle imperfections that make each piece unique 
                  and alive.
                </p>
              </div>

              <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <Button asChild variant="default" size="lg" className="glow-effect">
                  <Link to="/gallery">View My Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;