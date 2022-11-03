export const isGetGamepadsSupported =
  typeof navigator.getGamepads === 'function' ||
  typeof navigator.webkitGetGamepads === 'function';
