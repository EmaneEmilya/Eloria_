import { Leaf, Heart, Award } from 'lucide-react';
import aboutBg from '@assets/generated_images/About_section_botanical_background_76d5830d.png';

export default function AboutSection() {
  const features = [
    {
      icon: Leaf,
      title: 'Naturel',
      description: 'Ingrédients naturels et doux pour votre peau',
    },
    {
      icon: Heart,
      title: 'Abordable',
      description: 'Qualité premium à prix accessible',
    },
    {
      icon: Award,
      title: 'Qualité Allemande',
      description: 'Formules développées en Allemagne',
    },
  ];

  return (
    <section 
      className="relative py-20 sm:py-32 overflow-hidden"
      data-testid="section-about"
    >
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-foreground"
            data-testid="text-about-title"
          >
            À Propos d'Eloria
          </h2>
          <p 
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
            data-testid="text-about-description"
          >
            Eloria s'inspire de la tradition cosmétique allemande Balea pour vous offrir 
            des soins de beauté abordables et efficaces. Inspirés par la nature, nos produits 
            combinent qualité, douceur et respect de votre peau.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center space-y-4 p-6 rounded-2xl hover-elevate transition-all"
                data-testid={`card-feature-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 
                  className="text-xl font-semibold text-foreground"
                  data-testid={`text-feature-title-${index}`}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-muted-foreground"
                  data-testid={`text-feature-description-${index}`}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
