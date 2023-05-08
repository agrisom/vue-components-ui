export const listSize = ['sm', 'md', 'lg'] as const;
export const listSizeX = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type Size = typeof listSize[number];
export type SizeX = typeof listSizeX[number];