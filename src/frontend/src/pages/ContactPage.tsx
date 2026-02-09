import SectionHeader from '@/components/branding/SectionHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '@/content/siteCopy';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <SectionHeader
        title="Contact Us"
        subtitle="Get in touch with our team"
      />

      <div className="mx-auto max-w-4xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Email */}
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                <Mail className="h-6 w-6 text-gold" />
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="link" asChild className="h-auto p-0 text-base">
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </Button>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                <MapPin className="h-6 w-6 text-gold" />
              </div>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{contactInfo.location}</p>
            </CardContent>
          </Card>
        </div>

        {/* Phone Numbers */}
        <Card className="mt-6">
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
              <Phone className="h-6 w-6 text-gold" />
            </div>
            <CardTitle>Phone Numbers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {contactInfo.phones.map((phone, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="font-semibold">{phone.name}</p>
                  <Button variant="link" asChild className="h-auto p-0">
                    <a href={`tel:${phone.number}`}>{phone.number}</a>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
