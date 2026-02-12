# Specification

## Summary
**Goal:** Add a Parquet Flooring gallery image and wire the Parquet Flooring service to render media in the Services page “Additional Offerings” section.

**Planned changes:**
- Add a new generated static image asset at `frontend/public/assets/generated/parquet-flooring-001.dim_1600x1200.jpg`.
- Add at least one new `GalleryItem` in `frontend/src/content/galleryMedia.ts` with category `parquet-flooring` referencing `assets/generated/parquet-flooring-001.dim_1600x1200.jpg`.
- Update `frontend/src/content/services.ts` so the Parquet Flooring additionalOfferings entry uses `mediaCategory: "parquet-flooring"` to render via the existing `MediaStrip`.

**User-visible outcome:** The Parquet Flooring card under “Additional Offerings” on the Services page displays a MediaStrip with the parquet flooring image.
