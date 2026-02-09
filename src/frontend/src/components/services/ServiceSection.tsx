import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MediaStrip from '@/components/media/MediaStrip';
import { Service } from '@/content/services';

interface ServiceSectionProps {
  service: Service;
}

export default function ServiceSection({ service }: ServiceSectionProps) {
  return (
    <section id={service.id} className="scroll-mt-20">
      <Card className="overflow-hidden border-2">
        <CardHeader className="bg-muted/30">
          <CardTitle className="font-serif text-2xl md:text-3xl">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <p className="mb-6 text-lg text-muted-foreground">{service.description}</p>
          
          {service.features && service.features.length > 0 && (
            <div className="mb-6">
              <h4 className="mb-3 font-semibold">Key Features:</h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 text-gold">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <MediaStrip category={service.id} />
        </CardContent>
      </Card>
    </section>
  );
}
