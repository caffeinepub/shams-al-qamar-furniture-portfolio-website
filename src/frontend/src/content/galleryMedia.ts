export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  category: string;
  title: string;
  path: string;
}

export const galleryMedia: GalleryItem[] = [
  // Curtains & Drapes
  {
    id: 'curtain-001',
    type: 'image',
    category: 'curtains-drapes',
    title: 'Elegant Neutral Curtains with Sheer Overlay',
    path: 'assets/generated/IMG-20260205-WA0004-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'curtain-002',
    type: 'image',
    category: 'curtains-drapes',
    title: 'Bedroom Curtains with Decorative Tiebacks',
    path: 'assets/generated/IMG-20260205-WA0003-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'curtain-003',
    type: 'image',
    category: 'curtains-drapes',
    title: 'Luxury Curtains with Valance and Tassels',
    path: 'assets/generated/IMG-20260205-WA0002-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'curtain-004',
    type: 'image',
    category: 'curtains-drapes',
    title: 'Floor-to-Ceiling White Sheer Curtains',
    path: 'assets/generated/IMG-20260205-WA0011-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'curtain-005',
    type: 'image',
    category: 'curtains-drapes',
    title: 'Gray Blackout Curtains',
    path: 'assets/generated/IMG-20260205-WA0012-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'curtain-006',
    type: 'image',
    category: 'curtains-drapes',
    title: 'Teal and Beige Swag Curtains',
    path: 'assets/generated/IMG-20260205-WA0013-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'curtain-007',
    type: 'image',
    category: 'curtains-drapes',
    title: 'Modern Gray Curtains',
    path: 'assets/generated/IMG-20260205-WA0008-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'curtain-008',
    type: 'image',
    category: 'curtains-drapes',
    title: 'Minimalist Beige Curtains',
    path: 'assets/generated/IMG-20260205-WA0019-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'curtain-009',
    type: 'image',
    category: 'curtains-drapes',
    title: 'Modern White Curtains',
    path: 'assets/generated/IMG-20260205-WA0007-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'curtain-010',
    type: 'image',
    category: 'curtains-drapes',
    title: 'Elegant Beige Curtains',
    path: 'assets/generated/IMG-20260205-WA0006-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'curtain-011',
    type: 'image',
    category: 'curtains-drapes',
    title: 'Luxury Bedroom Curtains',
    path: 'assets/generated/IMG-20260205-WA0005-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'curtain-012',
    type: 'image',
    category: 'curtains-drapes',
    title: 'Contemporary Curtain Design',
    path: 'assets/generated/IMG-20260205-WA0009-1-clean.dim_1600x1200.jpg',
  },

  // Wallpaper Solutions
  {
    id: 'wallpaper-001',
    type: 'image',
    category: 'wallpaper-solutions',
    title: 'Elegant Blue Botanical Wallpaper with Built-in Shelving',
    path: 'assets/wallpaper1.jpeg',
  },
  {
    id: 'wallpaper-002',
    type: 'image',
    category: 'wallpaper-solutions',
    title: 'Soft Botanical Pattern Wallpaper',
    path: 'assets/wallpaper4.jpeg',
  },
  {
    id: 'wallpaper-003',
    type: 'image',
    category: 'wallpaper-solutions',
    title: 'Contemporary Botanical Wallpaper with Frame Accent',
    path: 'assets/wallpaper3.jpeg',
  },
  {
    id: 'wallpaper-004',
    type: 'image',
    category: 'wallpaper-solutions',
    title: 'Modern Botanical Wallpaper with Elegant Molding',
    path: 'assets/wallpaper2.jpeg',
  },
  {
    id: 'wallpaper-005',
    type: 'image',
    category: 'wallpaper-solutions',
    title: 'Geometric Diamond Pattern Wallpaper in Earth Tones',
    path: 'assets/wallpaper1.5.jpeg',
  },
  {
    id: 'wallpaper-006',
    type: 'image',
    category: 'wallpaper-solutions',
    title: 'Textured Geometric Wallpaper with Curtain Coordination',
    path: 'assets/wallpaper1.4.jpeg',
  },
  {
    id: 'wallpaper-007',
    type: 'image',
    category: 'wallpaper-solutions',
    title: 'Bold Geometric Diamond Wallpaper Feature Wall',
    path: 'assets/wallpaper1.1.jpeg',
  },
  {
    id: 'wallpaper-008',
    type: 'image',
    category: 'wallpaper-solutions',
    title: 'Sophisticated Geometric Wallpaper in Living Space',
    path: 'assets/wallpaper1.2.jpeg',
  },
  {
    id: 'wallpaper-009',
    type: 'image',
    category: 'wallpaper-solutions',
    title: 'Elegant Geometric Wallpaper with Traditional Accents',
    path: 'assets/wallpaper1.3.jpeg',
  },

  // Sofa Upholstery & New Sofa Sets
  {
    id: 'sofa-001',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Luxury Teal Tufted Sofa Set',
    path: 'assets/sofa1.jpeg',
  },
  {
    id: 'sofa-002',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Modern White Modular Seating',
    path: 'assets/sofa2.jpeg',
  },
  {
    id: 'sofa-003',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Contemporary Gray Tufted Sectional',
    path: 'assets/sofa3.jpeg',
  },
  {
    id: 'sofa-004',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Elegant Gray Corner Sofa with Gold Accents',
    path: 'assets/sofa4.jpeg',
  },
  {
    id: 'sofa-005',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Curved Beige Sectional with Accent Pillows',
    path: 'assets/sofa5.jpeg',
  },
  {
    id: 'sofa-006',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Modern Green Modular Sectional',
    path: 'assets/sofa6.jpeg',
  },
  {
    id: 'sofa-007',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Sage Green Corner Sofa with Gold Legs',
    path: 'assets/sofa7.jpeg',
  },
  {
    id: 'sofa-008',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Cream L-Shaped Sofa with Nailhead Trim',
    path: 'assets/sofa8.jpeg',
  },
  {
    id: 'sofa-009',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Modern White Sectional with Gray Accents',
    path: 'assets/sofa9.jpeg',
  },
  {
    id: 'sofa-010',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Taupe Tufted Chesterfield Sofa',
    path: 'assets/sofa10.jpeg',
  },
  {
    id: 'sofa-011',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Beige Tufted Sofa with Elegant Design',
    path: 'assets/sofa11.jpeg',
  },

  // Majlis / Arabic Seating
  {
    id: 'majlis-001',
    type: 'image',
    category: 'majlis-seating',
    title: 'Turquoise Arabic Floor Seating',
    path: 'assets/arabic majlis1-1.jpeg',
  },
  {
    id: 'majlis-002',
    type: 'image',
    category: 'majlis-seating',
    title: 'Modern Gray Tufted Majlis',
    path: 'assets/arabic majlis2-1.jpeg',
  },
  {
    id: 'majlis-003',
    type: 'image',
    category: 'majlis-seating',
    title: 'Elegant Beige U-Shaped Majlis',
    path: 'assets/arabic majlis3-1.jpeg',
  },
  {
    id: 'majlis-004',
    type: 'image',
    category: 'majlis-seating',
    title: 'Royal Blue Traditional Majlis',
    path: 'assets/arabic majlis4-1.jpeg',
  },

  // Carpet Installation
  {
    id: 'carpet-001',
    type: 'image',
    category: 'carpet-installation',
    title: 'Elegant Beige Carpet with Chandelier and Modern Lighting',
    path: 'assets/carpet4.jpeg',
  },
  {
    id: 'carpet-002',
    type: 'image',
    category: 'carpet-installation',
    title: 'Beige Carpet Installation in Elegant Room',
    path: 'assets/carpet2.jpeg',
  },
  {
    id: 'carpet-003',
    type: 'image',
    category: 'carpet-installation',
    title: 'Premium Beige Carpet with Teal Accent',
    path: 'assets/carpet1.jpeg',
  },
  {
    id: 'carpet-004',
    type: 'image',
    category: 'carpet-installation',
    title: 'Spacious Room with Beige Carpet Installation',
    path: 'assets/carpet3.jpeg',
  },
  {
    id: 'carpet-005',
    type: 'image',
    category: 'carpet-installation',
    title: 'Gray Textured Carpet with Curtains and Built-in Wardrobes',
    path: 'assets/carpet1.1.jpeg',
  },
  {
    id: 'carpet-006',
    type: 'image',
    category: 'carpet-installation',
    title: 'Carpet Installation Service Preview',
    path: 'assets/Screenshot 2026-02-12 215137.png',
  },

  // Roller Blinds
  {
    id: 'roller-blinds-001',
    type: 'image',
    category: 'roller-blinds',
    title: 'Modern Roller Blinds Installation',
    path: 'assets/roller blind.jpeg',
  },

  // Vertical Blinds
  {
    id: 'vertical-blinds-001',
    type: 'image',
    category: 'vertical-blinds',
    title: 'Blue Vertical Blinds with Ocean View',
    path: 'assets/generated/vertical-blinds-001.dim_1600x1200.jpg',
  },

  // Parquet Flooring
  {
    id: 'parquet-flooring-001',
    type: 'image',
    category: 'parquet-flooring',
    title: 'Classic Parquet Flooring Installation',
    path: 'assets/generated/parquet-flooring-001.dim_1600x1200.jpg',
  },
];
