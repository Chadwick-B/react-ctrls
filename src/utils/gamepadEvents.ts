import { IGamepadEventData, IGamepadEventOptions } from '../shared/types';

interface IGamepadButton {
  pressed: boolean;
  value: number;
}

interface IGamepad {
  buttons: IGamepadButton[];
  axes: number[];
}

let gamepads: Record<number, IGamepad> = {};
let options: IGamepadEventOptions = {};
let requestId: number;

const getGamepads = () => {
  return navigator.getGamepads
    ? navigator.getGamepads()
    : navigator.webkitGetGamepads
    ? navigator.webkitGetGamepads()
    : [];
};

const dispatch = (type: string, data: IGamepadEventData) => {
  dispatchEvent(new CustomEvent(type, { detail: data }));
};

const dispatchButtons = (gamepad: Gamepad, snapshot: IGamepad) => {
  for (let i = 0; i < gamepad.buttons.length; i++) {
    if (!options.buttons || options.buttons.has(i)) {
      const current = gamepad.buttons[i];
      const prev = snapshot.buttons[i] || {
        pressed: false,
        value: 0,
      };

      if (current.value !== prev.value) {
        const data = {
          gamepad,
          index: i,
          value: current.value,
        };

        dispatch('gamepadbuttonchange', data);
        if (current.pressed !== prev.pressed) {
          if (current.pressed) dispatch('gamepadbuttondown', data);
          else dispatch('gamepadbuttonup', data);
        }

        snapshot.buttons[i] = {
          pressed: current.pressed,
          value: current.value,
        };
      }
    }
  }
};

const dispatchAxes = (gamepad: Gamepad, snapshot: IGamepad) => {
  for (let i = 0; i < gamepad.axes.length; i++) {
    if (!options.axes || options.axes.has(i)) {
      let current = gamepad.axes[i];
      const prev = snapshot.axes[i] || 0;

      if (options.deadzone) {
        current =
          current > options.deadzone || current < -options.deadzone
            ? current
            : 0;
      }

      if (current !== prev) {
        dispatch('gamepadaxischange', {
          gamepad,
          index: i,
          value: current,
        });

        snapshot.axes[i] = current;
      }
    }
  }
};

const loop = (last: number = 0) => {
  let recent = last;

  for (const gamepad of getGamepads()) {
    if (gamepad && gamepad.timestamp > last) {
      if (!gamepads[gamepad.index]) {
        gamepads[gamepad.index] = {
          buttons: [],
          axes: [],
        };
      }

      dispatchButtons(gamepad, gamepads[gamepad.index]);
      dispatchAxes(gamepad, gamepads[gamepad.index]);
      recent = gamepad.timestamp;
    }
  }

  requestId = requestAnimationFrame(() => loop(recent));
};

const GamepadEvents = {
  start: (eventOptions?: IGamepadEventOptions) => {
    if (eventOptions) options = eventOptions;
    requestId = requestAnimationFrame(loop);
  },
  stop: () => {
    gamepads = {};
    requestId && cancelAnimationFrame(requestId);
  },
};

export default GamepadEvents;
