export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  category: string;
  title: string;
  path: string;
}

export const galleryMedia: GalleryItem[] = [
  // Placeholder entries - actual media should be manually added to /public/assets/gallery/
  // Example structure:
  // {
  //   id: '1',
  //   type: 'image',
  //   category: 'curtains-drapes',
  //   title: 'Luxury Silk Curtains',
  //   path: '/assets/gallery/curtains-1.jpg',
  // },
];
