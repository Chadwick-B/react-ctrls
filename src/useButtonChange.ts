import { useEffect } from 'react';
import { isGetGamepadsSupported } from './utils/compatibility';
import { GamepadEventFn } from './shared/types';
import { EVENTS } from './shared/events';

const useButtonChange = (cb: GamepadEventFn) => {
  useEffect(() => {
    if (isGetGamepadsSupported) {
      const fn = (e: CustomEventInit) => cb(e.detail);
      window.addEventListener(EVENTS.BUTTON_CHANGE, fn);
      return () => window.removeEventListener(EVENTS.BUTTON_CHANGE, fn);
    }
  }, [cb]);
};

export default useButtonChange;
