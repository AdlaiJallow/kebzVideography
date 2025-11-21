import { Camera, Film, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Camera,
      title: "Professional Equipment",
      description: "State-of-the-art 4K and 6K cinema cameras with premium lenses",
    },
    {
      icon: Film,
      title: "Cinematic Storytelling",
      description: "Every project is crafted with narrative depth and visual poetry",
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized excellence in videography and post-production",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About Our Craft
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just record moments—we create cinematic experiences that transcend time.
            With over a decade of experience, we bring your vision to life through the art of visual storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-elegant p-8 rounded-lg text-center transition-transform hover:scale-105 duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
