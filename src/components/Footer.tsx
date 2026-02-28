import { Monitor } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Admission", href: "#admission" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="hero-gradient text-primary-foreground">
    <div className="container py-12">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-bold mb-3">
            <Monitor className="w-6 h-6" />
            Kaushlya Computer
          </div>
          <p className="text-primary-foreground/75 text-sm leading-relaxed">
            Empowering students with digital skills since 2019. Your trusted partner for computer education in Palam, Maharashtra.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex gap-3">
            {["Facebook", "Instagram", "YouTube"].map((name) => (
              <a
                key={name}
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/15 flex items-center justify-center text-sm font-bold hover:bg-primary-foreground/25 transition-colors"
              >
                {name[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Kaushlya Computer. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
