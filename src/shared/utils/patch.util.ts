export function getPatch<T extends object>(newObject: T, oldObject: T) {
  const patch: Record<string, unknown> = {};
  Object.entries(newObject).forEach(([key, value]) => {
    if (oldObject[key as keyof T] !== value) patch[key] = value ?? null;
  });
  return JSON.stringify(patch) !== '{}' ? patch : undefined;
}