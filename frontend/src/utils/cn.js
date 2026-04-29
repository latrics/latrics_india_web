/** Join class names; omit falsy values. */
export function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}
