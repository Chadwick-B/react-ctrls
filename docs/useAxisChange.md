Run the passed callback function on any gamepad axis update.

## Example

```js
import useAxisChange from 'react-ctrls/useAxisChange';

const MyComponent = () => {
  useAxisChange((data) => {
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

Refer to [mappings](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/mapping) to target axes on various gamepads.
