const SMALLER = -1;
const BIGGER = 1;
const EQUAL = 0;

type PropertyComparator<T> = (a: T | undefined, b: T | undefined, desc: boolean) => number;

function undefsLast<T>(a: T | undefined, b: T | undefined, elseFn: () => number): number {
  if (a === undefined && b === undefined) return EQUAL;
  if (a === undefined) return BIGGER;
  if (b === undefined) return SMALLER;
  else return elseFn();
}

export function operatorComparisonUndefsLast<T>(a: T, b: T, desc: boolean): number {
  const dir = desc ? BIGGER : SMALLER;
  return undefsLast(a, b, () => {
    if (a < b) return dir;
    else if (a > b) return -dir;
    else return 0;
  });
}

export function typeAwareComparator(a: unknown, b: unknown, desc: boolean): number {
  if (typeof a === 'string' && typeof b === 'string') {
    return stringAlphabeticalComparator(a, b, desc);
  } else if (typeof a === 'number' && typeof b === 'number') {
    return numberComparator(a, b, desc);
  } else if (typeof a === 'bigint' && typeof b === 'bigint') {
    return numberComparator(a, b, desc);
  } else if (typeof a === 'boolean' && typeof b === 'boolean') {
    return booleanComparator(a, b, desc);
  } else if (a instanceof Date && b instanceof Date) {
    return dateComparator(a, b, desc);
  } else {
    return operatorComparisonUndefsLast(a, b, desc);
  }
}

export const stringAlphabeticalComparator: PropertyComparator<string> =
  (a, b, desc) => operatorComparisonUndefsLast(a?.toUpperCase(), b?.toUpperCase(), desc);

export const numberComparator: PropertyComparator<number | bigint> = operatorComparisonUndefsLast;

export const booleanComparator: PropertyComparator<boolean> = (a, b, desc) => {
  const dir = desc ? SMALLER : BIGGER;
  return undefsLast(a, b, () => {
    if (a === b) return 0;
    else if (a === true) return dir;
    else return -dir;
  });
};

export const dateComparator: PropertyComparator<Date> = operatorComparisonUndefsLast;