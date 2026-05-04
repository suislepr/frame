// Create a simple state management system with localStorage persistence

export function createStore(initialState, name) {
  const subscribers = [];

  let state = loadState(name) ?? { ...initialState };

  // Helper functions to load and save state from localStorage
  function loadState(key) {
    if (!key) return null;
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  }

  function saveState(key, value) {
    if (!key) return;
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Return the store API
  return {
    getState() {
      return { ...state };
    },

    setState(partial) {
      state = { ...state, ...partial };
      saveState(name, state);
      subscribers.forEach((fn) => fn(state));
    },

    // Method to subscribe to state changes
    subscribe(fn) {
      subscribers.push(fn);
      return () => {
        const index = subscribers.indexOf(fn);
        subscribers.splice(index, 1);
      };
    },
  };
}
