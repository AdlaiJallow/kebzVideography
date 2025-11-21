import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-gradient-gold mb-4">
              Cinematic Visions
            </h3>
            <p className="text-muted-foreground mb-4">
              Transforming moments into cinematic masterpieces. Professional videography services for life's most important events.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-secondary hover:bg-primary/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-secondary hover:bg-primary/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-secondary hover:bg-primary/20 p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-secondary hover:bg-primary/20 p-2 rounded-full transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#packages" className="hover:text-primary transition-colors">Packages</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Wedding Videography</li>
              <li>Corporate Events</li>
              <li>Commercial Production</li>
              <li>Music Videos</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} Cinematic Visions. All rights reserved.</p>
          <p className="mt-2">Crafted with passion for visual storytelling</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
