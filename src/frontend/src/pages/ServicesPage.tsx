import SectionHeader from '@/components/branding/SectionHeader';
import ServiceSection from '@/components/services/ServiceSection';
import { services, additionalOfferings } from '@/content/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <SectionHeader
        title="Our Services"
        subtitle="Comprehensive interior solutions tailored to your needs"
      />

      <div className="space-y-16">
        {services.map((service) => (
          <ServiceSection key={service.id} service={service} />
        ))}

        {/* Additional Offerings */}
        <section id="additional-offerings" className="scroll-mt-20">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="font-serif text-2xl md:text-3xl">
                Additional Offerings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {additionalOfferings.map((offering, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-4"
                  >
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20">
                      <span className="text-xs font-bold text-gold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{offering.title}</h4>
                      <p className="text-sm text-muted-foreground">{offering.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
