import { useState, useEffect } from 'react';
import SectionHeader from '@/components/branding/SectionHeader';
import PortfolioDirectLink from '@/components/branding/PortfolioDirectLink';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import MediaLightbox from '@/components/media/MediaLightbox';
import { galleryMedia, GalleryItem } from '@/content/galleryMedia';
import { services } from '@/content/services';
import { Card } from '@/components/ui/card';
import { Play, ImageOff } from 'lucide-react';

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    document.title = 'Portfolio | Shams Al Qamar Furniture';
  }, []);

  // Build categories from all service IDs plus 'all'
  const serviceCategories = services.map((s) => s.id);
  const categories = ['all', ...serviceCategories];

  const getFilteredMedia = (category: string) => {
    if (category === 'all') return galleryMedia;
    return galleryMedia.filter((item) => item.category === category);
  };

  const renderEmptyState = (category: string) => (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <ImageOff className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="mb-2 text-lg font-semibold">No media yet</h3>
        <p className="text-sm text-muted-foreground">
          {category === 'all'
            ? 'Portfolio images coming soon. Check our social media for the latest projects!'
            : `Portfolio images for ${category.replace('-', ' ')} coming soon.`}
        </p>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <SectionHeader
        title="Portfolio"
        subtitle="Explore our collection of completed projects"
      />

      <div className="mb-8">
        <PortfolioDirectLink />
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize">
              {category.replace(/-/g, ' ')}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => {
          const filteredMedia = getFilteredMedia(category);
          return (
            <TabsContent key={category} value={category}>
              {filteredMedia.length === 0 ? (
                renderEmptyState(category)
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredMedia.map((item) => (
                    <Card
                      key={item.id}
                      className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg"
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="relative aspect-square overflow-hidden bg-muted">
                        {item.type === 'image' ? (
                          <img
                            src={item.path}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                        ) : (
                          <>
                            <video
                              src={item.path}
                              className="h-full w-full object-cover"
                              muted
                              playsInline
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
                                <Play className="h-8 w-8 text-foreground" />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm capitalize text-muted-foreground">
                          {item.category.replace(/-/g, ' ')}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>

      {selectedItem && (
        <MediaLightbox
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
