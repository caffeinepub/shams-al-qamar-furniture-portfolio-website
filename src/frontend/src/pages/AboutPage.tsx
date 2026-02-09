import SectionHeader from '@/components/branding/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { siteCopy } from '@/content/siteCopy';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <SectionHeader
        title="About Us"
        subtitle="Discover our passion for transforming spaces"
      />

      <div className="mx-auto max-w-4xl">
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
      </div>
    </div>
  );
}
