Enable the animation frame required to scan the [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API).
Run this hook within the parent component of all gamepad logic, if not the `<App />` level.

## Example

```js
import useGamepadEvents from 'react-ctrls/useGamepadEvents';

const App = () => {
  useGamepadEvents();
  return <div>...</div>;
};
```

## Options Parameter

```ts
interface IGamepadEventOptions {
  buttons?: Set<number>;
  axes?: Set<number>;
  deadzone?: number;
}
```

## Example options

```js
useGamepadEvents({
  buttons: new Set([1, 5, 6]), // Will only dispatch buttons matching these indices
  axes: new Set([0, 1]), // Will only dispatch left horizontal / vertical axes
  deadzone: 0.4, // Will only dispatch 0 and values greater than 0.4
});
```
