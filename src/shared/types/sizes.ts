export const listSize = ['sm', 'md', 'lg'] as const;
export const listSizeX = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export const listSizeXS = ['xs', 'sm', 'md'] as const;
export const listSizeXL = ['sm', 'md', 'lg', 'xl'] as const;

export type Size = typeof listSize[number];
export type SizeX = typeof listSizeX[number];
export type SizeXS = typeof listSizeXS[number];
export type SizeXL = typeof listSizeXL[number];