export interface IGamepadEventOptions {
  buttons?: Set<number>;
  axes?: Set<number>;
  deadzone?: number;
}

export interface IGamepadEventData {
  gamepad: Gamepad;
  index: number;
  value: number;
}

export type GamepadEventFn = (data: IGamepadEventData) => void;
