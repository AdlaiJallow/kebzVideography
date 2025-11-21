import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-gradient-gold">
          KAYBEE
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light">
          Capturing Your Story in Motion
        </p>
        <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
          Premium videography services for weddings, events, corporate content, and commercials.
          Every frame tells your unique story with cinematic excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="hero-glow text-lg px-8 py-6 bg-gradient-gold hover:opacity-90 transition-opacity"
            onClick={() => scrollToSection("packages")}
          >
            View Packages
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 border-primary text-foreground hover:bg-primary/10"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
