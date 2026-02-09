import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { SiInstagram, SiTiktok, SiSnapchat } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { socialLinks } from '@/content/socialLinks';

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Vision & Mission', path: '/vision-mission' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/generated/shams-al-qamar-logo.dim_512x512.png"
            alt="Shams Al Qamar Furniture"
            className="h-12 w-12 object-contain"
          />
          <div className="hidden flex-col sm:flex">
            <span className="font-serif text-xl font-bold tracking-tight text-foreground">
              Shams Al Qamar
            </span>
            <span className="text-xs font-light tracking-wider text-muted-foreground">FURNITURE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Button
              key={link.path}
              variant="ghost"
              asChild
              className="text-sm font-medium transition-colors hover:text-accent-foreground"
            >
              <Link to={link.path}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Social Links - Desktop */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="icon" asChild>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <SiInstagram className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <SiTiktok className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={socialLinks.snapchat} target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
              <SiSnapchat className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 pt-8">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.path}>
                  <Button
                    variant="ghost"
                    className="justify-start text-lg"
                    onClick={() => {
                      navigate({ to: link.path });
                      setIsOpen(false);
                    }}
                  >
                    {link.label}
                  </Button>
                </SheetClose>
              ))}
              <div className="mt-6 flex gap-3 border-t border-border pt-6">
                <Button variant="outline" size="icon" asChild>
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <SiInstagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <SiTiktok className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href={socialLinks.snapchat} target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
                    <SiSnapchat className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
