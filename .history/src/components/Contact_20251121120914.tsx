import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      eventType: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's Create Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your cinematic journey? Get in touch and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="card-elegant p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-secondary border-border"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-secondary border-border"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 bg-secondary border-border"
                />
              </div>

              <div>
                <Label htmlFor="eventDate">Event Date</Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="mt-2 bg-secondary border-border"
                />
              </div>

              <div>
                <Label htmlFor="eventType">Type of Event *</Label>
                <Input
                  id="eventType"
                  name="eventType"
                  placeholder="Wedding, Corporate, Commercial, etc."
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-secondary border-border"
                />
              </div>

              <div>
                <Label htmlFor="message">Tell Us About Your Project *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-2 bg-secondary border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-gold hover:opacity-90 transition-opacity text-lg py-6"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-elegant p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">info@cinematicvisions.com</p>
                  <p className="text-muted-foreground">bookings@cinematicvisions.com</p>
                </div>
              </div>
            </div>

            <div className="card-elegant p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Mon-Fri: 9AM - 6PM EST</p>
                </div>
              </div>
            </div>

            <div className="card-elegant p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Our Studio</h3>
                  <p className="text-muted-foreground">123 Cinema Avenue</p>
                  <p className="text-muted-foreground">Los Angeles, CA 90028</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Booking Notice:</span> We recommend reaching out at least 3-6 months in advance for weddings and major events to ensure availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
