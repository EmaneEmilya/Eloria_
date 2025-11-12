# Eloria - Landing Page

Site vitrine moderne et élégant pour Eloria, une marque de beauté et soins de la peau inspirée de Balea Cosmetics.

## 🌸 Caractéristiques

- Design moderne avec palette pastel (rose doux, lavande, menthe, beige)
- Interface entièrement en français
- Présentation de 6 produits Balea avec prix en Dirhams marocains
- Sections : Hero, Catégories, Produits, À propos, Newsletter, Footer
- Responsive design
- Animations fluides avec Framer Motion

## 🚀 Déploiement sur Vercel

### Méthode 1 : Via GitHub (Recommandée)

1. **Poussez votre code vers GitHub :**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/eloria.git
   git push -u origin main
   ```

2. **Déployez sur Vercel :**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "New Project"
   - Importez votre repository GitHub
   - Vercel détectera automatiquement Vite
   - Cliquez sur "Deploy"

### Méthode 2 : Via Vercel CLI

1. **Installez Vercel CLI :**
   ```bash
   npm install -g vercel
   ```

2. **Déployez :**
   ```bash
   vercel
   ```

3. **Suivez les instructions** dans le terminal

## 🛠️ Développement Local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 📁 Structure du Projet

```
eloria/
├── client/
│   ├── src/
│   │   ├── components/     # Composants React
│   │   ├── pages/          # Pages
│   │   ├── lib/            # Utilitaires
│   │   └── hooks/          # Hooks personnalisés
│   ├── public/             # Assets statiques
│   └── index.html
├── attached_assets/        # Images et logos
├── vercel.json            # Configuration Vercel
└── README.md
```

## 🎨 Technologies

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Animations:** Framer Motion
- **Routing:** Wouter
- **Forms:** React Hook Form + Zod

## 📱 Contact

- Instagram: [@eloria_careandglow](https://www.instagram.com/eloria_careandglow/)

## 📝 License

MIT
