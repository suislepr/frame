# DOM Manipulation

This file explains how to create and mount DOM nodes in this project.

### Create a node:

`createElement(tag, props, ...children)` - creates a DOM element.
Where:

- `tag` (string): element type, e.g. `'button'`.
- `props` (object): element properties, e.g. `{ id: 1, onClick: () => alert('It works!') }`.
- `children` (strings, numbers, or DOM elements): content inside the element.

### Mount a node:

`render(element, container)` - mounts the created element into a real DOM container.

### Example:

Create a button and mount it into the document body

```js
import { createElement, render } from '../framework/dom.js';

const btn = createElement(
  'button',
  { id: 1, onClick: () => alert('It works!') },
  'Try',
);

render(btn, document.body);
```

Result:

```html
<body>
  <button id="1">Try</button>
</body>
```

Behavior: clicking the button shows an alert with the message "It works!".

Notes:

- Event props use `onX` format (e.g. `onClick`) and are attached with `addEventListener`.
- The `style` prop accepts an object (e.g. `{ color: 'red' }`).
- `class` maps to the element's `className`.
