import SectionHeader from '@/components/branding/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { siteCopy, sloganOptions } from '@/content/siteCopy';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <SectionHeader
        title="About Us"
        subtitle="Discover our passion for transforming spaces"
      />

      <div className="mx-auto max-w-4xl space-y-12">
        <Card>
          <CardContent className="prose prose-lg max-w-none p-8 dark:prose-invert md:p-12">
            <h2 className="font-serif text-2xl font-bold md:text-3xl">
              About {siteCopy.companyName}
            </h2>
            
            <p className="text-muted-foreground">
              At Shams Al Qamar Furniture, we're passionate about transforming spaces with elegance and
              functionality. As a leading furniture solutions provider, we specialize in delivering
              high-quality products and services, including:
            </p>

            <ul className="space-y-2">
              <li>Custom-made curtains and motorized curtains</li>
              <li>Carpet and PVC carpet installation</li>
              <li>Wallpaper installation</li>
              <li>Roller blinds and vertical blinds</li>
              <li>Parquet flooring solutions</li>
              <li>Sofa upholstery and new sofa sets</li>
            </ul>

            <p className="text-muted-foreground">
              Our team of experts is dedicated to understanding your unique needs and providing tailored
              solutions to exceed your expectations. With a focus on quality, customer satisfaction, and
              timely delivery, we're committed to building long-lasting relationships with our clients.
            </p>

            <p className="text-muted-foreground">
              Let us help you create a beautiful, comfortable, and functional space that reflects your
              style and personality.
            </p>
          </CardContent>
        </Card>

        {/* Slogan Options Section */}
        <Card>
          <CardContent className="p-8 md:p-12">
            <h2 className="mb-8 font-serif text-2xl font-bold md:text-3xl">
              Brand Tagline Options
            </h2>
            <p className="mb-8 text-muted-foreground">
              Explore our curated collection of taglines that capture the essence of our brand across different tones.
            </p>

            <div className="space-y-8">
              {/* Luxury */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gold">Luxury</h3>
                <ul className="space-y-3">
                  {sloganOptions.luxury.map((slogan, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span className="text-muted-foreground">{slogan}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modern */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gold">Modern</h3>
                <ul className="space-y-3">
                  {sloganOptions.modern.map((slogan, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span className="text-muted-foreground">{slogan}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Friendly */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gold">Friendly</h3>
                <ul className="space-y-3">
                  {sloganOptions.friendly.map((slogan, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span className="text-muted-foreground">{slogan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
