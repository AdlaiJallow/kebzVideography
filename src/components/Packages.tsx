import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Basic",
      price: "D4,500",
      description: "Perfect for shorter events and intimate celebrations",
      features: [
        "Duration: 4 hours",
        "Video length: ≤ 1 minute",
        "Extension: D1,200/hour",
        "Delivery: 5 days after shoot",
        "Transportation paid separately (varies by location)",
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: "D6,500",
      description: "Most popular for weddings and bridal showers",
      features: [
        "Duration: 6 hours",
        "Video length: ≤ 2 minutes",
        "Extension: D1,200/hour",
        "Delivery: 7 days after shoot",
        "Transportation paid separately (varies by location)",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "D10,000",
      description: "Extended coverage for full-day events and seminars",
      features: [
        "Duration: 10 hours",
        "Video length: ≤ 2 minutes",
        "Extension: D1,000/hour",
        "Delivery: 10 days after shoot",
        "Additional videos available (depends on content)",
        "Transportation paid separately (varies by location)",
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
            Event Highlight Shoots
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capture memorable moments for weddings, bridal showers, seminars, and more. All packages include professional editing and digital delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
