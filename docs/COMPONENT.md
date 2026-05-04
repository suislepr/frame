# Component Managment

Reusable component architecture. A component is a function that returns a DOM element.

### Create a component:

- `createComponent(renderFn)` - wraps a render function so it can re-render itself when state changes.
- `renderFn` is a function that receives `props` and returns a DOM node (use `createElement` to build nodes).

### Create an instance:

- `const MyComp = createComponent(renderFn);`
- `const inst = MyComp({ /* props */ });` - `inst` holds the mounted node and methods.

### Instance methods:

- `inst.mount(container)` - append component to a DOM container.
- `inst.update(newProps)` - re-run `renderFn` with `newProps`, replace the old node in the same container.

### Example

Create Greeting component

```js
import { createComponent } from '../framework/component.js';
import { createElement } from '../framework/dom.js';

const Greeting = createComponent((props) =>
  createElement('div', {}, `Hello ${props.name}`),
);

const inst = Greeting({ name: 'Mona' });
inst.mount(document.getElementById('app'));

setTimeout(() => {
  inst.update({ name: 'Liza' });
}, 2000);
```

Result:

```html
<div id="app">
  <div>Hello Mona</div>
</div>
```

After 2 seconds, `inst.update({ name: 'Liza' })` changes the output to:

```html
<div id="app">
  <div>Hello Liza</div>
</div>
```

### Design principles:

- Components are functions, not classes.
- A component receives `props` and returns a DOM node.
- `mount` keeps the component attached to the same container.
- `update` re-renders only the component node, not the whole page.
- Simple state and props flow makes components easy to reuse.
- The component API is small and predictable (`mount`, `update`).
