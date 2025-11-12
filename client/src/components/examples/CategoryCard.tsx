import CategoryCard from '../CategoryCard';
import categoryImage from '@assets/generated_images/Skincare_category_image_184f7338.png';

export default function CategoryCardExample() {
  return (
    <div className="max-w-sm">
      <CategoryCard
        title="Soins du Visage"
        icon="🧴"
        image={categoryImage}
        onExplore={() => console.log('Exploring skincare')}
      />
    </div>
  );
}
