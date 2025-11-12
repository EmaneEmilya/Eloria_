import ProductCard from '../ProductCard';
import productImage from '@assets/stock_images/balea_cosmetics_prod_52e66274.jpg';

export default function ProductCardExample() {
  return (
    <div className="max-w-sm">
      <ProductCard
        name="Sérum Niacinamide Balea"
        description="Éclaircit et unifie le teint. Formule légère avec niacinamide."
        price="€5.99"
        image={productImage}
        category="Soins du Visage"
        onAddToCart={() => console.log('Added to cart')}
        onViewMore={() => console.log('View more')}
      />
    </div>
  );
}
