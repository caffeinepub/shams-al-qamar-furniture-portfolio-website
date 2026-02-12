import { useState } from 'react';
import { useNavigate, useLocation } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { SiInstagram, SiTiktok, SiSnapchat, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { brandAssets } from '@/content/branding';
import { publicAsset } from '@/lib/publicAsset';
import { socialLinks } from '@/content/socialLinks';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Vision & Mission', path: '/vision-mission' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    navigate({ to: path });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-wood-header backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <button
          onClick={() => handleNavigation('/')}
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <img
            src={publicAsset(brandAssets.logo.src)}
            alt={brandAssets.logo.alt}
            className="saq-logo h-10 w-10"
          />
          <div className="flex flex-col items-start">
            <span className="font-serif text-lg font-bold leading-tight text-white">
              {brandAssets.companyName.primary}
            </span>
            <span className="text-xs font-medium tracking-wider text-gold">
              {brandAssets.companyName.secondary}
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                isActive(item.path)
                  ? 'text-gold'
                  : 'text-white/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social Links - Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition-colors hover:text-gold"
            aria-label="Instagram"
          >
            <SiInstagram className="h-5 w-5" />
          </a>
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition-colors hover:text-gold"
            aria-label="TikTok"
          >
            <SiTiktok className="h-5 w-5" />
          </a>
          <a
            href={socialLinks.snapchat}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition-colors hover:text-gold"
            aria-label="Snapchat"
          >
            <SiSnapchat className="h-5 w-5" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition-colors hover:text-gold"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="h-5 w-5" />
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition-colors hover:text-gold"
            aria-label="WhatsApp"
          >
            <SiWhatsapp className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-gold">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] border-white/10 bg-wood-card sm:w-[400px]">
            <nav className="flex flex-col gap-4 pt-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-left text-lg font-medium transition-colors hover:text-gold ${
                    isActive(item.path)
                      ? 'text-gold'
                      : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-6 flex gap-4 border-t border-white/10 pt-6">
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
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
