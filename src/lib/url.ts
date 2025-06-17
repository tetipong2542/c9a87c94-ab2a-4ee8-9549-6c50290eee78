
export function absoluteUrl(path: string) {
  // For Vite development, use the current origin
  const baseUrl = import.meta.env.VITE_BASE_URL || window.location.origin
  const absoluteUrl = new URL(path, baseUrl)
  return absoluteUrl.toString()
}
