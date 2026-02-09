import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { GalleryItem } from '@/content/galleryMedia';
import { publicAsset } from '@/lib/publicAsset';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MediaLightboxProps {
  item: GalleryItem;
  onClose: () => void;
}

export default function MediaLightbox({ item, onClose }: MediaLightboxProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0">
        <DialogTitle className="sr-only">{item.title}</DialogTitle>
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
          
          {item.type === 'image' ? (
            <img
              src={publicAsset(item.path)}
              alt={item.title}
              className="h-auto w-full max-h-[80vh] object-contain"
            />
          ) : (
            <video
              src={publicAsset(item.path)}
              controls
              autoPlay
              className="h-auto w-full max-h-[80vh]"
            />
          )}
          
          <div className="border-t border-border bg-background p-4">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm capitalize text-muted-foreground">
              {item.category.replace('-', ' ')}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
