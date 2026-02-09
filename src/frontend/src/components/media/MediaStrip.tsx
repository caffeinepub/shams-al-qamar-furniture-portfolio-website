import { Card } from '@/components/ui/card';
import { galleryMedia } from '@/content/galleryMedia';
import { publicAsset } from '@/lib/publicAsset';
import { useState } from 'react';

interface MediaStripProps {
  category: string;
}

export default function MediaStrip({ category }: MediaStripProps) {
  const media = galleryMedia.filter((item) => item.category === category).slice(0, 4);
  const isMajlis = category === 'majlis-seating';
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});

  if (media.length === 0) {
    return (
      <div className="rounded-lg border-2 border-dashed border-border bg-muted/30 p-8 text-center">
        <p className="text-sm text-muted-foreground">
          Gallery images coming soon. Check our social media for the latest projects!
        </p>
      </div>
    );
  }

  const handleImageError = (itemId: string) => {
    setImageErrors(prev => ({ ...prev, [itemId]: true }));
    setImageLoading(prev => ({ ...prev, [itemId]: false }));
  };

  const handleImageLoad = (itemId: string) => {
    setImageLoading(prev => ({ ...prev, [itemId]: false }));
  };

  return (
    <div className={`grid gap-4 ${isMajlis ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
      {media.map((item) => (
        <Card 
          key={item.id} 
          className={`overflow-hidden transition-all duration-300 hover:shadow-2xl ${
            isMajlis 
              ? 'border-2 border-gold/30 hover:border-gold/60 hover:scale-[1.02] shadow-lg' 
              : 'hover:shadow-lg'
          }`}
        >
          <div className={`relative overflow-hidden bg-muted ${
            isMajlis ? 'aspect-[4/3]' : 'aspect-square'
          }`}>
            {item.type === 'image' ? (
              <>
                {imageErrors[item.id] ? (
                  <div className="flex h-full w-full items-center justify-center bg-muted">
                    <div className="text-center p-4">
                      <p className="text-xs text-muted-foreground">Image unavailable</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.title}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {imageLoading[item.id] !== false && (
                      <div className="absolute inset-0 flex items-center justify-center bg-muted">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold/30 border-t-gold"></div>
                      </div>
                    )}
                    <img
                      src={publicAsset(item.path)}
                      alt={item.title}
                      className={`h-full w-full transition-transform duration-500 hover:scale-110 ${
                        isMajlis 
                          ? 'object-cover object-center' 
                          : 'object-cover'
                      }`}
                      onError={() => handleImageError(item.id)}
                      onLoad={() => handleImageLoad(item.id)}
                      loading="lazy"
                    />
                  </>
                )}
              </>
            ) : (
              <video
                src={publicAsset(item.path)}
                className="h-full w-full object-cover"
                muted
                playsInline
              />
            )}
            {isMajlis && !imageErrors[item.id] && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            )}
          </div>
          {isMajlis && (
            <div className="bg-gradient-to-r from-gold/5 to-transparent p-3">
              <p className="text-xs font-medium text-gold-dark line-clamp-2">
                {item.title}
              </p>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
