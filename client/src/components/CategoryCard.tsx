import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  icon: string;
  image: string;
  onExplore?: () => void;
}

export default function CategoryCard({ title, icon, image, onExplore }: CategoryCardProps) {
  return (
    <Card 
      className="group overflow-hidden hover-elevate transition-all duration-300 cursor-pointer"
      onClick={onExplore}
      data-testid={`card-category-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          data-testid={`img-category-${title.toLowerCase().replace(/\s+/g, '-')}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <span className="text-3xl" role="img" aria-label={title}>{icon}</span>
          <h3 
            className="text-xl font-semibold text-foreground"
            data-testid={`text-category-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {title}
          </h3>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm"
          className="group/btn w-full justify-between"
          data-testid={`button-explore-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <span>Explorer</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
}
