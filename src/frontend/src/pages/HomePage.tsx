import { useNavigate } from '@tanstack/react-router';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import QRCodeBlock from '@/components/branding/QRCodeBlock';
import { siteCopy, contactInfo } from '@/content/siteCopy';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/assets/generated/shams-al-qamar-hero-bg.dim_1920x1080.png)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <div className="container relative mx-auto flex min-h-[600px] flex-col items-center justify-center px-4 py-20 text-center md:px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="font-medium">Premium Interior Solutions</span>
          </div>
          
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {siteCopy.companyName}
          </h1>
          
          <p className="mb-8 max-w-2xl text-xl text-muted-foreground md:text-2xl">
            {siteCopy.tagline}
          </p>
          
          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => navigate({ to: '/services' })}
              className="gap-2 text-base"
            >
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate({ to: '/contact' })}
              className="text-base"
            >
              Get in Touch
            </Button>
          </div>

          {/* Contact Summary & QR */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <Card className="bg-background/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold">Contact Information</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Email:</strong>{' '}
                    <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                      {contactInfo.email}
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Phone:</strong>{' '}
                    <a href={`tel:${contactInfo.phones[0].number}`} className="hover:underline">
                      {contactInfo.phones[0].number}
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Location:</strong> {contactInfo.location}
                  </p>
                </div>
              </CardContent>
            </Card>

            <QRCodeBlock />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">What We Do</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From custom curtains to complete interior fit-outs, we deliver excellence in every detail
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Custom Curtains & Drapes', desc: 'Silk, chiffon, linen & motorized options' },
              { title: 'Wallpaper Solutions', desc: 'Designer prints & textured finishes' },
              { title: 'Full Interior Fit-outs', desc: 'Residential & commercial projects' },
              { title: 'Turnkey Service', desc: 'Design consultation to installation' },
            ].map((service, idx) => (
              <Card key={idx} className="transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" onClick={() => navigate({ to: '/services' })} className="gap-2">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
