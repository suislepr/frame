// Simple DOM manipulation utilities

// Create an element with given tag ('div', 'span', etc.),
//                              props (attributes, event listeners, styles, etc.),
//                              and children (elements or text)
export function createElement(tag, props, ...children) {
  const element = document.createElement(tag);

  // Set props
  for (const [key, value] of Object.entries(props || {})) {
    if (key.startsWith('on')) {
      element.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (key === 'style') {
      Object.assign(element.style, value);
    } else if (key === 'class') {
      element.className = value;
    } else {
      element.setAttribute(key, value);
    }
  }

  // Append children
  for (const child of children) {
    if (child == null) continue;

    if (typeof child === 'string' || typeof child === 'number') {
      element.appendChild(document.createTextNode(String(child)));
    } else {
      element.appendChild(child);
    }
  }

  return element;
}

// Render function to mount the element to the DOM
export function render(element, container) {
  container.innerHTML = '';
  container.appendChild(element);
}
