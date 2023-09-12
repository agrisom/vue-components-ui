export function localeDecimalNumber(num: number, intlOptions: Intl.NumberFormatOptions = { maximumFractionDigits: 2 }, locale?: string | string[]): string {
  return num.toLocaleString(locale, intlOptions);
}

export function bytesToLocaleString(num: number, intlOptions?: Intl.NumberFormatOptions, locale?: string | string[]): string {
  const unitKinds = ['B', 'KB', 'MB', 'GB', 'TB'];
  const converted = unitKinds.map((unit, idx) => [num / Math.pow(1024, idx), unit] as const);
  const [value, unit] = converted.find(([value]) => value < 1024) || converted[converted.length - 1];
  return localeDecimalNumber(value, intlOptions, locale) + ' ' + unit;
}