import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Essential",
      price: "$1,499",
      description: "Perfect for intimate events and smaller productions",
      features: [
        "Up to 4 hours of coverage",
        "Single videographer",
        "2-3 minute highlight reel",
        "Basic color grading",
        "Digital delivery in 4K",
        "Background music",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "$2,999",
      description: "Our most popular package for weddings and corporate events",
      features: [
        "Up to 8 hours of coverage",
        "Two videographers",
        "5-7 minute cinematic film",
        "Advanced color grading",
        "Drone footage included",
        "Custom soundtrack",
        "Same-day teaser edit",
        "Online gallery",
      ],
      popular: true,
    },
    {
      name: "Luxury",
      price: "$5,499",
      description: "Premium coverage for milestone celebrations",
      features: [
        "Full day coverage (12+ hours)",
        "Three videographers",
        "10-15 minute cinematic film",
        "Professional color grading",
        "Drone + gimbal footage",
        "Custom score composition",
        "Documentary-style raw footage",
        "4K master files",
        "Exclusive online gallery",
      ],
      popular: false,
    },
    {
      name: "Ultimate",
      price: "Custom",
      description: "Bespoke production for commercials and brand content",
      features: [
        "Unlimited coverage time",
        "Full production crew",
        "Multiple deliverables",
        "Cinema-grade equipment",
        "Full creative direction",
        "Script development",
        "Professional actors/talent",
        "Multi-location shoots",
        "Priority scheduling",
        "Dedicated project manager",
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Investment Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your project. All packages include professional editing and digital delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`card-elegant p-8 rounded-lg relative transition-all duration-300 hover:scale-105 ${
                pkg.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-gold text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full bg-gradient-gold hover:opacity-90 transition-opacity"
                onClick={scrollToContact}
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
