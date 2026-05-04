# Components

This file explains how to create and use simple components in this project.

### Create a component:

- `createComponent(renderFn)` - returns a factory function for a component.
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
