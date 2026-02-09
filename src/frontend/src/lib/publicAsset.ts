/**
 * Resolves public asset paths to work correctly in all deployment scenarios.
 * Uses Vite's BASE_URL to ensure assets resolve correctly whether deployed
 * at root or a subdirectory.
 */
export function publicAsset(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Get the base URL from Vite's environment
  const base = import.meta.env.BASE_URL || '/';
  
  // Ensure base ends with slash
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  
  // Combine base and path
  return `${baseWithSlash}${cleanPath}`;
}
