export function debounce<F extends(...args: any[]) => void>(func: F, wait = 500, immediate?: boolean): (...args: Parameters<F>) => void {
  let timeout: NodeJS.Timeout | undefined;
  return (...args: Parameters<F>) => {
    const later = () => {
      timeout = undefined;
      if (!immediate)
        func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func(...args);
  };
}