import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import heroImage from '@assets/generated_images/Hero_background_pastel_flowers_53a88296.png';

interface HeroSectionProps {
  onCTAClick?: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section 
      className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-background/30" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card/60 backdrop-blur-md rounded-full border border-card-border">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Cosmétiques Naturels</span>
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground leading-tight"
            data-testid="text-hero-title"
          >
            Care and Glow
          </h1>
          
          <p 
            className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto font-light"
            data-testid="text-hero-subtitle"
          >
            Soins de beauté abordables inspirés par la nature allemande
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 backdrop-blur-sm"
              onClick={onCTAClick}
              data-testid="button-cta-discover"
            >
              Découvrir nos Produits
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-base px-8 bg-card/60 backdrop-blur-md"
              data-testid="button-cta-about"
            >
              En Savoir Plus
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
