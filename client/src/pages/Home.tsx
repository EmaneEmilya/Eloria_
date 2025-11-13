import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import AboutSection from '@/components/AboutSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

import skincareImg from '@assets/generated_images/Skincare_category_image_184f7338.png';
import haircareImg from '@assets/generated_images/Haircare_category_image_a51c0069.png';
import bodycareImg from '@assets/generated_images/Body_care_category_image_d6d0afaa.png';
import masksImg from '@assets/generated_images/Masks_and_serums_category_081fd1b9.png';

import product1 from '@assets/stock_images/balea_cosmetics_prod_52e66274.jpg';
import product2 from '@assets/stock_images/balea_cosmetics_prod_ead863cc.jpg';
import product3 from '@assets/stock_images/balea_cosmetics_prod_bf432f80.jpg';
import product4 from '@assets/stock_images/balea_cosmetics_prod_2c227301.jpg';
import product5 from '@assets/stock_images/balea_cosmetics_prod_35f763bb.jpg';
import product6 from '@assets/stock_images/balea_cosmetics_prod_25b4640b.jpg';

export default function Home() {
  const categories = [
    {
      title: 'Soins du Visage',
      icon: '🧴',
      image: skincareImg,
    },
    {
      title: 'Soins des Cheveux',
      icon: '💆‍♀️',
      image: haircareImg,
    },
    {
      title: 'Soins du Corps',
      icon: '🪷',
      image: bodycareImg,
    },
    {
      title: 'Masques & Sérums',
      icon: '🌿',
      image: masksImg,
    },
  ];

  const products = [
    {
      name: 'Sérum Niacinamide Balea',
      description: 'Éclaircit et unifie le teint. Formule légère avec niacinamide pour une peau radieuse.',
      price: '€5.99',
      image: product1,
      category: 'Soins du Visage',
    },
    {
      name: 'Gel Nettoyant Ultra Sensitive Med',
      description: 'Nettoyage doux pour peaux sensibles. Sans parfum, testé dermatologiquement.',
      price: '€3.49',
      image: product2,
      category: 'Soins du Visage',
    },
    {
      name: 'Peeling Liquide 2% BHA',
      description: 'Exfoliant doux qui affine les pores et améliore la texture de la peau.',
      price: '€5.95',
      image: product3,
      category: 'Soins du Visage',
    },
    {
      name: 'Crème Q10 Anti-Rides',
      description: 'Formule anti-âge enrichie en Q10 pour réduire les signes de vieillissement.',
      price: '€4.99',
      image: product4,
      category: 'Soins du Visage',
    },
    {
      name: 'Sérum Capillaire Professional',
      description: 'Renforce les cheveux, stimule la croissance avec Panthénol et Kératine.',
      price: '€9.99',
      image: product5,
      category: 'Soins des Cheveux',
    },
    {
      name: 'Huile de Beauté Naturelle Bio',
      description: 'Huile multifonction bio pour visage, corps et cheveux. 100% naturelle.',
      price: '€10.00',
      image: product6,
      category: 'Soins du Corps',
    },
  ];

  const handleNavigation = (section: string) => {
    console.log('Navigate to:', section);
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryExplore = (category: string) => {
    console.log('Explore category:', category);
  };

  const handleAddToCart = (productName: string) => {
    console.log('Add to cart:', productName);
  };

  const handleViewProduct = (productName: string) => {
    console.log('View product:', productName);
  };

  const handleNewsletterSubscribe = (email: string) => {
    console.log('Newsletter subscribe:', email);
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigation} />
      
      <main>
        <div id="accueil">
          <HeroSection onCTAClick={() => handleNavigation('#produits')} />
        </div>

        <section 
          id="produits" 
          className="py-20 sm:py-32"
          data-testid="section-categories"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-foreground">
                Catégories de Produits
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez notre sélection de soins inspirés par la nature
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {categories.map((category) => (
                <CategoryCard
                  key={category.title}
                  title={category.title}
                  icon={category.icon}
                  image={category.image}
                  onExplore={() => handleCategoryExplore(category.title)}
                />
              ))}
            </div>
          </div>
        </section>

        <section 
          className="py-20 sm:py-32 bg-muted/30"
          data-testid="section-featured-products"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-foreground">
                Produits Vedettes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nos best-sellers inspirés de la marque allemande Balea
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.name}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  onAddToCart={() => handleAddToCart(product.name)}
                  onViewMore={() => handleViewProduct(product.name)}
                />
              ))}
            </div>
          </div>
        </section>

        <div id="apropos">
          <AboutSection />
        </div>

        <div id="contact">
          <NewsletterSection onSubscribe={handleNewsletterSubscribe} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
