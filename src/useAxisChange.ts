import { useEffect } from 'react';
import { isGetGamepadsSupported } from './utils/compatibility';
import { GamepadEventFn } from './shared/types';
import { EVENTS } from './shared/events';

const useAxisChange = (cb: GamepadEventFn) => {
  useEffect(() => {
    if (isGetGamepadsSupported) {
      const fn = (e: CustomEventInit) => cb(e.detail);
      window.addEventListener(EVENTS.AXIS_CHANGE, fn);
      return () => window.removeEventListener(EVENTS.AXIS_CHANGE, fn);
    }
  }, [cb]);
};

export default useAxisChange;
