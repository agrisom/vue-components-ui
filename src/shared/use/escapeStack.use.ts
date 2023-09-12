type Listener = (event: KeyboardEvent) => void;

const listeners: Listener[] = [];

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' || event.key === 'Esc') {
    const listener = listeners.pop();
    listener && listener(event);
  }
});

export function useEscapeStack() {

  function registerEscapeListener(onEscape: Listener) {
    listeners.push(onEscape);
  }

  function unregisterEscapeListener(onEscape: Listener) {
    const index = listeners.indexOf(onEscape);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  }

  return { registerEscapeListener, unregisterEscapeListener };

}