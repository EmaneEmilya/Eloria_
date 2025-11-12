import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  onAddToCart?: () => void;
  onViewMore?: () => void;
}

export default function ProductCard({ 
  name, 
  description, 
  price, 
  image, 
  category,
  onAddToCart,
  onViewMore 
}: ProductCardProps) {
  return (
    <Card 
      className="group overflow-hidden hover-elevate transition-all duration-300 flex flex-col h-full"
      data-testid={`card-product-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-testid={`img-product-${name.toLowerCase().replace(/\s+/g, '-')}`}
        />
        <Badge 
          variant="secondary" 
          className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm"
          data-testid={`badge-category-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {category}
        </Badge>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex-1 space-y-3">
          <h3 
            className="text-lg font-semibold text-foreground line-clamp-2"
            data-testid={`text-product-name-${name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {name}
          </h3>
          
          <p 
            className="text-sm text-muted-foreground line-clamp-2"
            data-testid={`text-product-description-${name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {description}
          </p>
        </div>
        
        <div className="mt-4 space-y-3">
          <p 
            className="text-2xl font-bold text-primary"
            data-testid={`text-product-price-${name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {price}
          </p>
          
          <div className="flex gap-2">
            <Button 
              className="flex-1"
              onClick={onAddToCart}
              data-testid={`button-add-cart-${name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Ajouter
            </Button>
            <Button 
              variant="outline"
              size="icon"
              onClick={onViewMore}
              data-testid={`button-view-more-${name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
