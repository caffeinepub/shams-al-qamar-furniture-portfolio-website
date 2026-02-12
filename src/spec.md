# Specification

## Summary
**Goal:** Update the Services page galleries by clearing the “Full Interior Fit-outs” gallery and adding a new image gallery for the “Carpet Installation” additional offering.

**Planned changes:**
- Remove all existing gallery media entries for the “Full Interior Fit-outs” service so it shows the empty-gallery placeholder.
- Add 6 provided carpet-related images as static assets under `frontend/public/assets/` (keeping filenames exactly) and register them in `frontend/src/content/galleryMedia.ts` under a single carpet gallery category.
- Update the “Additional Offerings” UI so only “Carpet Installation” renders a `MediaStrip` using the new carpet category (other offerings unchanged).

**User-visible outcome:** On the Services page, “Full Interior Fit-outs” shows “Gallery images coming soon...” with no thumbnails, and “Carpet Installation” displays a thumbnail grid of the newly added carpet images.
