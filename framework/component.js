// Create a component factory function that takes a renderFn function and returns a component constructor

export function createComponent(renderFn) {
  return function (props) {
    const component = {
      props,
      container: null,
      node: renderFn(props),

      // Method to mount the component to a DOM container
      mount(container) {
        component.container = container;
        container.appendChild(component.node);
      },

      // Method to update the component with new props
      update(newProps) {
        component.props = newProps ?? component.props;
        const newNode = renderFn(component.props);
        component.container.replaceChild(newNode, component.node);
        component.node = newNode;
      },
    };

    return component;
  };
}
