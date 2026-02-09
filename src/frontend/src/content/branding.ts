/**
 * Centralized branding assets for consistent usage across the application.
 * Single source of truth for logo paths and brand identity elements.
 */

export const brandAssets = {
  logo: {
    src: '/assets/generated/saq-logo-clean.dim_512x512.png',
    alt: 'SAQ - Shams Al Qamar Furniture',
  },
  companyName: {
    primary: 'Shams Al Qamar',
    secondary: 'FURNITURE',
  },
} as const;
