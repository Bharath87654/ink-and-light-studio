import { useState } from "react";
import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
                Let's Connect
              </h1>
              <p className="text-xl text-muted-foreground animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                Have a question about my art or interested in commissioning a piece?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 bg-card border-border animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-input border-border focus:border-accent resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full glow-effect">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Contact Info & Social */}
              <div className="space-y-8">
                <Card className="p-8 bg-card border-border animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <span className="text-muted-foreground">bharathkumar.art@email.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Instagram className="h-5 w-5 text-accent" />
                      <span className="text-muted-foreground">@bharathkumar_art</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-card border-border animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Commission Work</h2>
                  <p className="text-muted-foreground mb-4">
                    Interested in a custom piece? I'm available for commission work including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Character portraits</li>
                    <li>• Anime-style illustrations</li>
                    <li>• Custom artwork pieces</li>
                    <li>• Personal commissions</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;