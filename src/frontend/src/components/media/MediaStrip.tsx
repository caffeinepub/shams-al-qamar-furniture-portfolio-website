import { Card } from '@/components/ui/card';
import { galleryMedia } from '@/content/galleryMedia';

interface MediaStripProps {
  category: string;
}

export default function MediaStrip({ category }: MediaStripProps) {
  const media = galleryMedia.filter((item) => item.category === category).slice(0, 4);

  if (media.length === 0) {
    return (
      <div className="rounded-lg border-2 border-dashed border-border bg-muted/30 p-8 text-center">
        <p className="text-sm text-muted-foreground">
          Gallery images coming soon. Check our social media for the latest projects!
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {media.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <div className="relative aspect-square overflow-hidden bg-muted">
            {item.type === 'image' ? (
              <img
                src={item.path}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <video
                src={item.path}
                className="h-full w-full object-cover"
                muted
                playsInline
              />
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
