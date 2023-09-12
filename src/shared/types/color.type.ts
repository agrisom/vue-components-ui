export const listColor = ['default', 'primary', 'secondary', 'success', 'warning', 'error'] as const;

export type Color = typeof listColor[number];