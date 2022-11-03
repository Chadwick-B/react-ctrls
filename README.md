# react-ctrls

React hooks to easily implement gamepad controls using the [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API).
Supports the use of multiple gamepads at the same time across multiple browsers. Removes the common need for context or prop drilling to read gamepad inputs.

## Installation

```bash
npm install react-ctrls
```

## Hooks

- [useGamepadEvents](https://github.com/Chadwick-B/react-ctrls/blob/main/docs/useGamepadEvents.md)
- [useButtonChange](https://github.com/Chadwick-B/react-ctrls/blob/main/docs/useButtonChange.md)
- [useButtonDown](https://github.com/Chadwick-B/react-ctrls/blob/main/docs/useButtonDown.md)
- [useButtonUp](https://github.com/Chadwick-B/react-ctrls/blob/main/docs/useButtonUp.md)
- [useAxisChange](https://github.com/Chadwick-B/react-ctrls/blob/main/docs/useAxisChange.md)

Potential future hooks

- usePose
- useMultipress
- useInputSequence

## Example

App.js

```js
import useGamepadEvents from 'react-ctrls/useGamepadEvents';

const App = () => {
  useGamepadEvents();
  return <MyComponent />;
};
```

MyComponent.js

```js
import useButtonDown from 'react-ctrls/useButtonDown';

const MyComponent = () => {
  useButtonDown((data) => {
    console.log(data);
  });

  return <div>Logging button presses</div>;
};
```
