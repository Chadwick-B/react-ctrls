Run the passed callback function on any gamepad button press.

## Example

```js
import useButtonDown from 'react-ctrls/useButtonDown';

const MyComponent = () => {
  useButtonDown((data) => {
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
