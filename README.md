# `useBoolean`

This is a simple hook to manage boolean state, useful for doing stuff like managing checkbox state, showing modals etc.

## Installation

`npm i react-use-boolean`

or

`yarn add react-use-boolean`

## Usage

```jsx
import { useBoolean } from "react-use-boolean";

const YourComponent = () => {
  const [value, actions] = useBoolean();

  return (
    <div>
      {value && <p>Toggle me</p>}
      <button onClick={actions.toggle}>Toggle</button>
      <button onClick={actions.on}>Show</button>
      <button onClick={actions.off}>Hide</button>
    </div>
  );
};
```

## Reference

```js
const [value, { on, off, toggle, set }] = useBoolean();
```

- `on(): void` - sets state to `true`;
- `off(): void` - sets state to `false`;
- `toggle(): void` - inverts state;
- `set(value: boolean): void` - sets state to `value` specified;
