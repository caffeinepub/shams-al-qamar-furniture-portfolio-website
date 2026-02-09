import { useState } from 'react';
import SectionHeader from '@/components/branding/SectionHeader';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import MediaLightbox from '@/components/media/MediaLightbox';
import { galleryMedia, GalleryItem } from '@/content/galleryMedia';
import { Card } from '@/components/ui/card';
import { Play } from 'lucide-react';

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = ['all', ...Array.from(new Set(galleryMedia.map((item) => item.category)))];

  const getFilteredMedia = (category: string) => {
    if (category === 'all') return galleryMedia;
    return galleryMedia.filter((item) => item.category === category);
  };

  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <SectionHeader
        title="Gallery"
        subtitle="Explore our portfolio of completed projects"
      />

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize">
              {category.replace('-', ' ')}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {getFilteredMedia(category).map((item) => (
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
                      {item.category.replace('-', ' ')}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
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
