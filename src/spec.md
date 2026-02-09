# Specification

## Summary
**Goal:** Fix the current build/deployment failure so the site deploys cleanly, and provide the live website URL plus a shareable Portfolio link.

**Planned changes:**
- Diagnose and resolve deployment/build configuration issues and any project build errors causing the current failure.
- Fix any TypeScript, routing, runtime, and asset-path issues that prevent a successful production build and a clean deployed run.
- Ensure all routes in `frontend/src/App.tsx` (`/`, `/about`, `/vision-mission`, `/services`, `/gallery`, `/contact`) load after deployment.
- Ensure all media referenced from `frontend/src/content/galleryMedia.ts` resolves to valid URLs (no broken images, including Majlis).
- Publish the deployed site and provide the live URL and the direct Portfolio URL (`/gallery`).

**User-visible outcome:** The deployed site loads without console errors, all pages/routes work, gallery images display correctly (including Majlis), and the user receives the live website URL and a shareable Portfolio link ending in `/gallery`.
