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
    title: 'Modern Geometric Wallpaper',
    path: 'assets/generated/IMG-20260205-WA0016-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'wallpaper-002',
    type: 'image',
    category: 'wallpaper-solutions',
    title: 'Elegant Textured Wallpaper',
    path: 'assets/generated/IMG-20260205-WA0017-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'wallpaper-003',
    type: 'image',
    category: 'wallpaper-solutions',
    title: 'Contemporary Wall Design',
    path: 'assets/generated/IMG-20260205-WA0018-1-clean.dim_1600x1200.jpg',
  },

  // Full Interior Fit-outs
  {
    id: 'interior-001',
    type: 'image',
    category: 'full-interior',
    title: 'Complete Living Room Interior',
    path: 'assets/generated/IMG-20260205-WA0016-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'interior-002',
    type: 'image',
    category: 'full-interior',
    title: 'Modern Interior Design',
    path: 'assets/generated/IMG-20260205-WA0017-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'interior-003',
    type: 'image',
    category: 'full-interior',
    title: 'Elegant Space Transformation',
    path: 'assets/generated/IMG-20260205-WA0018-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'interior-004',
    type: 'image',
    category: 'full-interior',
    title: 'Contemporary Interior Fit-out',
    path: 'assets/generated/IMG-20260205-WA0019-1-clean.dim_1600x1200.jpg',
  },

  // Turnkey Service
  {
    id: 'turnkey-001',
    type: 'image',
    category: 'turnkey-service',
    title: 'Complete Room Makeover',
    path: 'assets/generated/IMG-20260205-WA0009-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'turnkey-002',
    type: 'image',
    category: 'turnkey-service',
    title: 'Full Service Interior Project',
    path: 'assets/generated/IMG-20260205-WA0013-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'turnkey-003',
    type: 'image',
    category: 'turnkey-service',
    title: 'Comprehensive Design Solution',
    path: 'assets/generated/IMG-20260205-WA0012-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'turnkey-004',
    type: 'image',
    category: 'turnkey-service',
    title: 'End-to-End Interior Service',
    path: 'assets/generated/IMG-20260205-WA0011-1-clean.dim_1600x1200.jpg',
  },

  // Sofa Upholstery & New Sofa Sets
  {
    id: 'sofa-001',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Custom Sofa Upholstery',
    path: 'assets/generated/IMG-20260205-WA0002-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'sofa-002',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Premium Fabric Sofa Set',
    path: 'assets/generated/IMG-20260205-WA0003-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'sofa-003',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Elegant Sofa Design',
    path: 'assets/generated/IMG-20260205-WA0004-1-clean.dim_1600x1200.jpg',
  },
  {
    id: 'sofa-004',
    type: 'image',
    category: 'sofa-upholstery',
    title: 'Modern Upholstered Seating',
    path: 'assets/generated/IMG-20260205-WA0005-1-clean.dim_1600x1200.jpg',
  },

  // Majlis / Arabic Seating
  {
    id: 'majlis-001',
    type: 'image',
    category: 'majlis-seating',
    title: 'Traditional Yellow Majlis with Geometric Patterns',
    path: 'assets/majlis/IMG-20260205-WA0046-2.jpg',
  },
  {
    id: 'majlis-002',
    type: 'image',
    category: 'majlis-seating',
    title: 'Turquoise Arabic Floor Seating Arrangement',
    path: 'assets/majlis/IMG-20260205-WA0047-2.jpg',
  },
  {
    id: 'majlis-003',
    type: 'image',
    category: 'majlis-seating',
    title: 'Royal Blue Majlis with Traditional Patterns',
    path: 'assets/majlis/IMG-20260205-WA0048-2.jpg',
  },
];
