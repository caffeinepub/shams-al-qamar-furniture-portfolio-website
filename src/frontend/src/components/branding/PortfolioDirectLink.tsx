import { useState } from 'react';
import { Copy, Check, ExternalLink, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PortfolioDirectLink() {
  const [copiedSite, setCopiedSite] = useState(false);
  const [copiedPortfolio, setCopiedPortfolio] = useState(false);
  
  const siteUrl = typeof window !== 'undefined' 
    ? window.location.origin
    : '';
  
  const portfolioUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/gallery`
    : '/gallery';

  const handleCopySite = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopiedSite(true);
      setTimeout(() => setCopiedSite(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleCopyPortfolio = async () => {
    try {
      await navigator.clipboard.writeText(portfolioUrl);
      setCopiedPortfolio(true);
      setTimeout(() => setCopiedPortfolio(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="space-y-3">
      <Card className="bg-accent/5 border-accent/20">
        <CardContent className="p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-medium text-muted-foreground">
                  Live Site URL
                </p>
              </div>
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-foreground hover:text-accent transition-colors break-all flex items-center gap-1"
              >
                {siteUrl}
                <ExternalLink className="h-3 w-3 flex-shrink-0" />
              </a>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopySite}
              className="gap-2 whitespace-nowrap"
            >
              {copiedSite ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gold/5 border-gold/20">
        <CardContent className="p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Direct Portfolio URL
              </p>
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-foreground hover:text-gold transition-colors break-all flex items-center gap-1"
              >
                {portfolioUrl}
                <ExternalLink className="h-3 w-3 flex-shrink-0" />
              </a>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyPortfolio}
              className="gap-2 whitespace-nowrap border-gold/30 hover:bg-gold/10"
            >
              {copiedPortfolio ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
