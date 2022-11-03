import { useEffect } from 'react';
import { isGetGamepadsSupported } from './utils/compatibility';
import { GamepadEventFn } from './shared/types';
import { EVENTS } from './shared/events';

const useButtonUp = (cb: GamepadEventFn) => {
  useEffect(() => {
    if (isGetGamepadsSupported) {
      const fn = (e: CustomEventInit) => cb(e.detail);
      window.addEventListener(EVENTS.BUTTON_UP, fn);
      return () => window.removeEventListener(EVENTS.BUTTON_UP, fn);
    }
  }, [cb]);
};

export default useButtonUp;
