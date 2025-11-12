import { Facebook, Instagram } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import logoImage from '@assets/image_1762976862254.png';

export default function Footer() {
  const quickLinks = [
    { label: 'Confidentialité', href: '#privacy' },
    { label: 'Conditions', href: '#terms' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/eloria_careandglow/',
      label: 'Instagram',
      testId: 'link-social-instagram'
    },
    { 
      icon: Facebook, 
      href: 'https://facebook.com',
      label: 'Facebook',
      testId: 'link-social-facebook'
    },
    { 
      icon: SiTiktok, 
      href: 'https://tiktok.com',
      label: 'TikTok',
      testId: 'link-social-tiktok'
    },
  ];

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <img 
              src={logoImage} 
              alt="Eloria" 
              className="h-12 w-auto"
              data-testid="img-footer-logo"
            />
            <p className="text-sm text-muted-foreground max-w-xs">
              Soins de beauté abordables inspirés par la nature allemande
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded inline-block"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover-elevate transition-all"
                    aria-label={social.label}
                    data-testid={social.testId}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Eloria. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
