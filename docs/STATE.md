# State Management

Reactive state management. When state changes, registered listeners are called automatically.

### Create state:

- `createStore(initialState, key)` — creates a state store.
- If a value already exists in `localStorage` under `key`, the saved state is used instead of the initial value.

- `initialState` is an object.
- `key` is a string used for `localStorage`.

### Read state:

- `state.getState()` — returns the current state snapshot.

### Update state:

- `state.setState(partial)` — merges `partial` into the current state.
- The state is saved to `localStorage`.
- Subscribers are notified immediately after every update.

### Subscribe to state changes:

- `state.subscribe(fn)` — registers a callback.
- The callback receives the new state.
- Returns an `unsubscribe` function.

### Example

Create a counter, render it, and update it after state changes.

```js
import { createStore } from '../framework/state.js';
import { createElement, render } from '../framework/dom.js';

const state = createStore({ count: 5 }, 'counter-state-example');

const p = createElement('p', {}, state.getState().count);
render(p, document.body);

state.subscribe((newState) => {
  p.textContent = newState.count;
});

state.setState({ count: 6 });
```

Result:

```html
<body>
  <p>6</p>
</body>
```

### Design principles:

- State is shared between components that use the same store instance.
- State is persisted to `localStorage` under the given key.
- `setState` does a shallow merge, so only changed fields need to be passed.
