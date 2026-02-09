# Specification

## Summary
**Goal:** Fix the current runtime/build issues so the portfolio site deploys cleanly, rename “Gallery” link labels to “Portfolio” without changing the `/gallery` route, and provide a direct live link to the portfolio page.

**Planned changes:**
- Identify and fix the cause(s) of runtime and build failures (TypeScript errors, routing issues, missing/incorrect static asset paths) so the app builds and all existing routes load without console errors.
- Update header navigation and footer quick links to display “Portfolio” while keeping the route path as `/gallery`.
- Regenerate and publish a working build, then provide the direct portfolio URL (deployed site URL + `/gallery`).

**User-visible outcome:** The site loads reliably across all pages, the navigation shows “Portfolio” (linking to `/gallery`), and a direct live URL to the portfolio page is available and works.
