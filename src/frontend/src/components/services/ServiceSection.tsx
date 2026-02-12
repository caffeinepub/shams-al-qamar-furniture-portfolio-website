import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MediaStrip from '@/components/media/MediaStrip';
import { Service } from '@/content/services';

interface ServiceSectionProps {
  service: Service;
}

export default function ServiceSection({ service }: ServiceSectionProps) {
  const isMajlis = service.id === 'majlis-seating';
  const isSofa = service.id === 'sofa-upholstery';
  
  return (
    <section id={service.id} className="scroll-mt-20">
      <Card className={`overflow-hidden border-2 ${isMajlis ? 'bg-gradient-to-br from-background via-background to-gold/5 shadow-xl' : ''}`}>
        <CardHeader className={`${isMajlis ? 'bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border-b-2 border-gold/20' : 'bg-muted/30'}`}>
          <CardTitle className={`font-serif ${isMajlis ? 'text-3xl md:text-4xl text-gold-dark' : 'text-2xl md:text-3xl'}`}>
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent className={`${isMajlis ? 'p-8 md:p-10' : 'p-6 md:p-8'}`}>
          <p className={`mb-6 ${isMajlis ? 'text-xl leading-relaxed' : 'text-lg'} text-muted-foreground`}>
            {service.description}
          </p>
          
          {service.features && service.features.length > 0 && (
            <div className="mb-8">
              <h4 className={`mb-4 font-semibold ${isMajlis ? 'text-lg text-gold-dark' : ''}`}>
                Key Features:
              </h4>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`mt-1 ${isMajlis ? 'text-gold text-xl' : 'text-gold'}`}>•</span>
                    <span className={`text-muted-foreground ${isMajlis ? 'text-base' : ''}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <MediaStrip category={service.id} limit={isSofa ? 5 : undefined} />
        </CardContent>
      </Card>
    </section>
  );
}
