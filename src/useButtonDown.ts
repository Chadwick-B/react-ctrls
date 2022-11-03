import { useEffect } from 'react';
import { isGetGamepadsSupported } from './utils/compatibility';
import { GamepadEventFn } from './shared/types';
import { EVENTS } from './shared/events';

const useButtonDown = (cb: GamepadEventFn) => {
  useEffect(() => {
    if (isGetGamepadsSupported) {
      const fn = (e: CustomEventInit) => cb(e.detail);
      window.addEventListener(EVENTS.BUTTON_DOWN, fn);
      return () => window.removeEventListener(EVENTS.BUTTON_DOWN, fn);
    }
  }, [cb]);
};

export default useButtonDown;
