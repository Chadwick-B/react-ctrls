Run the passed callback function on any gamepad button update including [touch](https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton/touched) and [value](https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton/value).

## Example

```js
import useButtonChange from 'react-ctrls/useButtonChange';

const MyComponent = () => {
  useButtonChange((data) => {
    console.log(data);
  });

  return <div>...</div>;
};
```

## Event Data Type

```tsx
interface IGamepadEventData {
  gamepad: Gamepad;
  index: number;
  value: number;
}
```

Refer to [mappings](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/mapping) to target buttons on various gamepads.
