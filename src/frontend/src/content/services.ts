export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'curtains-drapes',
    title: 'Custom Curtains & Drapes',
    description:
      'Transform your windows with our exquisite collection of custom curtains and drapes. From luxurious silk to elegant chiffon and natural linen, we offer a wide range of fabrics and styles. Our motorized curtain solutions provide modern convenience with timeless elegance.',
    features: [
      'Premium fabrics: silk, chiffon, linen',
      'Motorized curtain systems',
      'Custom measurements and fitting',
      'Wide range of colors and patterns',
      'Professional installation',
    ],
  },
  {
    id: 'wallpaper-solutions',
    title: 'Wallpaper Solutions',
    description:
      'Elevate your interiors with our stunning wallpaper collection. Whether you prefer designer prints or textured finishes, our expert team ensures flawless installation that brings your vision to life.',
    features: [
      'Designer prints and patterns',
      'Textured wallpaper options',
      'Durable and washable materials',
      'Expert installation service',
      'Custom design consultation',
    ],
  },
  {
    id: 'full-interior',
    title: 'Full Interior Fit-outs',
    description:
      'Complete interior transformation for residential and commercial spaces. We handle every aspect of your project, from concept to completion, ensuring a cohesive and stunning result that exceeds expectations.',
    features: [
      'Residential projects',
      'Commercial spaces',
      'Complete space planning',
      'Quality materials and craftsmanship',
      'Project management',
    ],
  },
  {
    id: 'turnkey-service',
    title: 'Turnkey Service',
    description:
      'Experience hassle-free interior solutions with our comprehensive turnkey service. From initial design consultation to final installation, we manage every detail so you can enjoy a seamless transformation of your space.',
    features: [
      'Design consultation',
      'Material selection',
      'Project coordination',
      'Professional installation',
      'Post-installation support',
    ],
  },
  {
    id: 'sofa-upholstery',
    title: 'Sofa Upholstery & New Sofa Sets',
    description:
      'Breathe new life into your existing furniture or create custom seating solutions from scratch. Our expert craftsmen specialize in premium upholstery work and bespoke sofa design, offering a wide selection of fabrics, colors, and styles to match your interior vision.',
    features: [
      'Professional reupholstery services',
      'Custom-designed new sofa sets',
      'Premium fabric selection',
      'Expert craftsmanship',
      'Personalized design consultation',
    ],
  },
  {
    id: 'majlis-seating',
    title: 'Majlis / Arabic Seating',
    description:
      'Create an authentic and luxurious majlis space with our traditional Arabic seating solutions. We specialize in custom majlis designs that blend cultural heritage with modern comfort, featuring rich fabrics, intricate details, and traditional craftsmanship.',
    features: [
      'Traditional majlis designs',
      'Custom floor seating arrangements',
      'Luxurious fabrics and cushions',
      'Cultural authenticity',
      'Complete majlis room setup',
    ],
  },
];

export const additionalOfferings = [
  {
    title: 'Carpet Installation',
    description: 'Premium carpet and PVC carpet solutions',
  },
  {
    title: 'Roller Blinds',
    description: 'Modern and functional window treatments',
  },
  {
    title: 'Vertical Blinds',
    description: 'Elegant light control solutions',
  },
  {
    title: 'Parquet Flooring',
    description: 'Classic and durable flooring options',
  },
];
