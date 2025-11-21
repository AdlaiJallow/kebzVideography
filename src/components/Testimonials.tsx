import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      event: "Wedding",
      content: "Our wedding film exceeded every expectation. The team captured emotions we didn't even know existed. Five years later, we still cry watching it. Pure cinematic magic.",
      rating: 5,
    },
    {
      name: "David Martinez",
      event: "Corporate Brand Video",
      content: "Cinematic Visions transformed our brand story into a visual masterpiece. The attention to detail and creative vision resulted in a 300% increase in engagement. Worth every penny.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      event: "Quinceañera",
      content: "They didn't just film my daughter's quinceañera—they created a timeless treasure. The drone shots, the slow motion moments, everything was absolutely stunning. Our family watches it every month!",
      rating: 5,
    },
    {
      name: "Tech Innovations Inc.",
      event: "Product Launch",
      content: "Professional beyond measure. They understood our vision immediately and delivered a launch video that went viral. The ROI from their work has been extraordinary.",
      rating: 5,
    },
    {
      name: "James & Alexandra Wilson",
      event: "Destination Wedding",
      content: "We hired them for our wedding in Santorini. They traveled internationally and captured our three-day celebration flawlessly. The film feels like a Hollywood production. Cannot recommend enough!",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Client Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from the people whose stories we've had the honor to tell.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elegant p-6 rounded-lg transition-transform hover:scale-105 duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
