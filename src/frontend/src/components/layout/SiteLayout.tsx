import { ReactNode, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { publicAsset } from '@/lib/publicAsset';

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const [bgUrl, setBgUrl] = useState('');

  useEffect(() => {
    // Resolve the futuristic wooden background URL using publicAsset for base-path safety
    setBgUrl(publicAsset('assets/generated/wood-futuristic-bg.dim_1920x1080.png'));
  }, []);

  return (
    <div 
      className="wooden-bg flex min-h-screen flex-col"
      style={{
        '--wood-bg-url': bgUrl ? `url(${bgUrl})` : 'none'
      } as React.CSSProperties}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
