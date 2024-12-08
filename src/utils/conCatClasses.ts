export function cc(...classes: unknown[]) {
  return classes.filter((className) => typeof className === "string").join(" ");
}
