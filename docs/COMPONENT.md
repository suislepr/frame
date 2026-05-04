# Components

This file explains how to create and use simple components in this project.

### Create a component:

- `createComponent(render)` - returns a factory function for a component.
- `render` is a function that receives `props` and returns a DOM node (use `createElement` to build nodes).

### Create an instance:

- `const MyComp = createComponent(render);`
- `const instance = MyComp({ /* props */ });` - `instance` holds the mounted node and methods.

### Instance methods:

- `instance.mount(container)` - append component to a DOM container.
- `instance.update(newProps)` - re-run `render` with `newProps`, replace the old node in the same container.

### Example

Create Greeting component

```js
import { createComponent } from '../src/components.js';
import { createElement } from '../src/dom.js';

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
