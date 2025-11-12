import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

interface NewsletterSectionProps {
  onSubscribe?: (email: string) => void;
}

export default function NewsletterSection({ onSubscribe }: NewsletterSectionProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && onSubscribe) {
      onSubscribe(email);
      setEmail('');
    }
  };

  return (
    <section 
      className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background"
      data-testid="section-newsletter"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl font-serif font-semibold text-foreground"
            data-testid="text-newsletter-title"
          >
            Rejoignez notre communauté beauté
          </h2>
          
          <p 
            className="text-lg text-muted-foreground"
            data-testid="text-newsletter-description"
          >
            Recevez nos conseils beauté, offres exclusives et nouveautés directement dans votre boîte mail
          </p>
          
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Votre adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-card"
              required
              data-testid="input-newsletter-email"
            />
            <Button 
              type="submit" 
              size="lg"
              className="sm:w-auto"
              data-testid="button-newsletter-subscribe"
            >
              S'abonner
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground">
            En vous inscrivant, vous acceptez de recevoir nos communications. 
            Vous pouvez vous désabonner à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
}
