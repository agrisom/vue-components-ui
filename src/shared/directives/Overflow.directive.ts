import AlertUtil from '@/components/UIAlert/UIAlert.util';

export const vOverflowTitle = {
  mounted: (el: HTMLElement) => {
    if (isOverflow(el)) el.title = el.innerHTML;
  },
};

export const vOverflowCopy = {
  mounted: (el: HTMLElement, text?: { value: string }) => {
    if (isOverflow(el)) el.addEventListener('click', event => copyText(event, text?.value));
  },
};

export const vCopyText = {
  mounted: (el: HTMLElement, text?: { value: string }) => {
    el.addEventListener('click', event => copyText(event, text?.value));
  },
};

const isOverflow = (target: HTMLElement) => {
  return target.offsetWidth !== target.scrollWidth || target.offsetHeight !== target.scrollHeight;
};

const copyText = (event: Event, notificationText?: string) => {
  const target = event.target as HTMLElement;
  navigator.clipboard.writeText(target.innerHTML);
  if (notificationText) AlertUtil.info(notificationText);
};