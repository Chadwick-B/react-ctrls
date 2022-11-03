import { useLayoutEffect } from 'react';
import { IGamepadEventOptions } from './shared/types';
import { isGetGamepadsSupported } from './utils/compatibility';
import GamepadEvents from './utils/gamepadEvents';

const useGamepadEvents = (options?: IGamepadEventOptions) => {
  useLayoutEffect(() => {
    if (isGetGamepadsSupported) {
      GamepadEvents.start(options);
      return () => GamepadEvents.stop();
    }
  }, [options]);
};

export default useGamepadEvents;
