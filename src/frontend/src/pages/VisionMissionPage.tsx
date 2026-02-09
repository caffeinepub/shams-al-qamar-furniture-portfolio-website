import SectionHeader from '@/components/branding/SectionHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye } from 'lucide-react';
import { siteCopy } from '@/content/siteCopy';

export default function VisionMissionPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <SectionHeader
        title="Vision & Mission"
        subtitle="Our commitment to excellence and innovation"
      />

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <Card className="border-2">
          <CardHeader>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
              <Eye className="h-6 w-6 text-gold" />
            </div>
            <CardTitle className="font-serif text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{siteCopy.vision}</p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
              <Target className="h-6 w-6 text-gold" />
            </div>
            <CardTitle className="font-serif text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{siteCopy.mission}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
