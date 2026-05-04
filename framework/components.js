// Create a component factory function that takes a render function and returns a component constructor

export function createComponent(render) {
  return function (props) {
    const component = {
      props,
      container: null,
      node: render(props),

      // Method to mount the component to a DOM container
      mount(container) {
        component.container = container;
        container.appendChild(component.node);
      },

      // Method to update the component with new props
      update(newProps) {
        component.props = newProps ?? component.props;
        const newNode = render(component.props);
        component.container.replaceChild(newNode, component.node);
        component.node = newNode;
      },
    };

    return component;
  };
}
