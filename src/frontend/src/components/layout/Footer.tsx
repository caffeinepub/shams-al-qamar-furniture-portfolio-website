import { useNavigate } from '@tanstack/react-router';
import { SiInstagram, SiTiktok, SiSnapchat, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import { Heart } from 'lucide-react';
import { brandAssets } from '@/content/branding';
import { publicAsset } from '@/lib/publicAsset';
import { contactInfo } from '@/content/siteCopy';
import { socialLinks } from '@/content/socialLinks';

export default function Footer() {
  const navigate = useNavigate();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  const getUtmLink = () => {
    const appId = typeof window !== 'undefined' 
      ? encodeURIComponent(window.location.hostname)
      : 'unknown-app';
    return `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`;
  };

  return (
    <footer className="border-t border-white/10 bg-wood-footer">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src={publicAsset(brandAssets.logo.src)}
                alt={brandAssets.logo.alt}
                className="saq-logo h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-tight text-white">
                  {brandAssets.companyName.primary}
                </span>
                <span className="text-xs font-medium tracking-wider text-gold">
                  {brandAssets.companyName.secondary}
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Premium interior solutions for your home and business
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate({ to: link.path })}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-gold">
                  {contactInfo.email}
                </a>
              </li>
              {contactInfo.phones.map((phone, idx) => (
                <li key={idx}>
                  <a href={`tel:${phone.number}`} className="hover:text-gold">
                    {phone.name}: {phone.number}
                  </a>
                </li>
              ))}
              <li className="pt-2">{contactInfo.location}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-gold"
                aria-label="Instagram"
              >
                <SiInstagram className="h-6 w-6" />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-gold"
                aria-label="TikTok"
              >
                <SiTiktok className="h-6 w-6" />
              </a>
              <a
                href={socialLinks.snapchat}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-gold"
                aria-label="Snapchat"
              >
                <SiSnapchat className="h-6 w-6" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-gold"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-6 w-6" />
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-gold"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} {brandAssets.companyName.primary}. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> using{' '}
            <a
              href={getUtmLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
