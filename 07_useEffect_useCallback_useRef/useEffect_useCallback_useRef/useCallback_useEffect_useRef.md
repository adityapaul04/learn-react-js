# What is useCallback?

`useCallback` is a hook in React that returns a memoized callback function. This callback function only changes if one of the dependencies has changed. In simpler terms, `useCallback` is used to optimize performance by memoizing functions, preventing unnecessary re-renders of components.

## What is a memoized function?

A memoized function is a function that caches its return value for a given set of inputs. In other words, when a memoized function is called with a specific set of arguments, it stores the result of that function call in memory. If the function is called again with the same arguments, it returns the cached result instead of recalculating it.

In the context of React and `useCallback`, when you memoize a callback function using `useCallback`, you're essentially creating a memoized version of that function. This means that the function will only be recreated if its dependencies change, ensuring that the same function reference is returned as long as its dependencies remain the same. This can help prevent unnecessary re-renders of components and optimize the performance of your React application.

## What is a dependency?

In the context of `useCallback` in React, dependencies refer to the values that the memoized callback function relies on. When you use `useCallback` to memoize a callback function, you can specify an array of dependencies as the second argument.

When you memoize a function using techniques like `useCallback` in React, you typically provide a list of dependencies. This list tells React which external values or pieces of information the memoized function relies on. React will then recompute the memoized function whenever any of these dependencies change, ensuring that the function stays up-to-date with the latest data. This helps to maintain consistency and avoid unexpected behavior in your application.

```jsx
const memoizedCallback = useCallback(() => {
  // Function body
}, [dependency1, dependency2]);
```

Here, memoizedCallback is the memoized callback function, and [dependencies] is an optional array of dependencies. If any of the dependencies change, the callback function will be re-created. If the dependencies remain the same, the same memoized function reference is returned.

## Why use useCallback?

- **Performance Optimization**: `useCallback` optimizes performance by memoizing functions, ensuring that they are only recreated if their dependencies change. This can prevent unnecessary re-renders of components.

- **Preventing Unnecessary Re-renders**: When passing callback functions to child components as props, using `useCallback` ensures that the same callback reference is passed down unless the dependencies change. This prevents child components from re-rendering unnecessarily.

## Common Patterns and Considerations:

- **Dependency Array**: `useCallback` accepts a dependency array as the second argument. It is important to include all dependencies that are used inside the callback function. If any of these dependencies change, the callback function will be re-created.

- **Avoiding Inline Callbacks**: `useCallback` is especially useful for preventing inline callback functions from being recreated on every render. By memoizing these callbacks, you can optimize performance and prevent unnecessary re-renders.

# What Is the useRef Hook?

The `useRef` Hook serves two main purposes: storing mutable values that do not cause a re-render when updated and storing references to DOM elements. Let’s explore how it works in more detail.

When a component renders in React, its state and other variables are typically reset. However, there are cases where you need to retain certain values even when the component re-renders. This is where the `useRef` Hook comes into play. It allows you to create a reference to a value that will persist between renders, ensuring that the value remains intact even if other parts of the component change.

Additionally, the `useRef` Hook is instrumental in working with DOM elements. In React, accessing and modifying DOM elements directly can be challenging, especially without the `useRef` Hook. With `useRef`, you can obtain a reference to a specific DOM element and perform operations on it. This eliminates the need for external libraries or convoluted workarounds.

```jsx
const myRef = useRef(initialValue);
```
Here, myRef is the ref object, and initialValue is an optional initial value for the ref. The initial value is often null.

To access the value stored in the reference created, you can use the `.current` property of the myRef object.

## Why use useRef?

- **Accessing DOM elements**: `useRef` allows you to directly access and interact with DOM elements in a functional component without the need for class components or manual DOM manipulation.

- **Holding mutable values**: `useRef` can hold mutable values that persist across renders, making it useful for storing values that you want to persist between renders without triggering re-renders.

- **Preserving values between renders**: Unlike state variables, changes to a ref's current value do not trigger re-renders. This makes `useRef` suitable for storing values that you want to preserve between renders without affecting the component's rendering.

## Common patterns and considerations:

- **Accessing DOM elements**: `useRef` is commonly used to reference DOM elements and access their properties or methods directly.

- **Preserving values**: `useRef` is also used to store values that need to persist between renders, such as previous state values, scroll positions, or other mutable data.

- **Avoiding re-renders**: Changes to a ref's current value do not trigger re-renders. However, you can use the `useState` hook in combination with `useRef` to achieve the same behavior as `useState`, but without triggering re-renders for every value change.

## Mutable Reference:

When you create a ref using `useRef` in React, you're essentially creating a reference to a specific piece of data or an object.
- This reference remains the same throughout the lifetime of the component, even as the component re-renders.
- While the reference itself remains constant, the value it points to can be mutated or changed.

## Mutable Values:

The value stored within the ref object (accessed via `myRef.current`) can be mutable.
- This means that you can change the value of `myRef.current` at any point in the component's lifecycle.
- Unlike state variables (which trigger re-renders when they change), changes to the value of a ref do not cause the component to re-render.

```jsx
import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  const myRef = useRef(null);

  useEffect(() => {
    // Changing the value of the ref
    myRef.current = 'Hello, world!';
  }, []);

  return (
    <div ref={myRef}>
      {/* Content */}
    </div>
  );
};
```

## What is useEffect?

`useEffect` is a hook in React that allows you to perform side effects in functional components. Side effects are tasks that happen outside the normal flow of your component, such as fetching data from an API, updating the DOM, or subscribing to events.

### What is meant by side-effects in React?

In React, a "side effect" is anything your component does besides rendering UI. It could be fetching data from the internet, updating the browser's title, or even setting up a timer.

Now, `useEffect` in React is like a special place in your component where you can handle these side effects. You tell React, "Hey, when this component renders or updates, here's something extra I need to do." React takes care of executing those instructions at the right time, making sure everything happens smoothly.

So, `useEffect` is like having a designated spot in your React component recipe where you can handle extra tasks besides just displaying stuff on the screen. It's a way to keep your component's logic organized and tidy.

```jsx
useEffect(() => {
  // Side effect code here
}, [dependencies]);
```

The `useEffect` hook in React is used to perform side effects in functional components. Here's how it works:

- The first argument to `useEffect` is a function that contains the code for your side effect.
- The second argument is an optional array of dependencies. If any of these dependencies change, the side effect will be re-executed. If you don't provide a dependencies array, the side effect will run after every render.

### Cleanup function:

You can return a cleanup function from `useEffect` to perform cleanup tasks when the component unmounts or before the side effect is re-executed.

```jsx
useEffect(() => {
  // Side effect code here

  return () => {
    // Cleanup code here
  };
}, [dependencies]);
```
In React, `"unmounting"` refers to the process of removing a component from the DOM. When a component is unmounted, it means that it is no longer part of the user interface, and its corresponding elements are removed from the DOM tree.

## Why use useEffect?

- **Managing side effects**: `useEffect` is used to manage side effects in functional components. This includes tasks such as fetching data, updating the DOM, or subscribing to events.
- **Replacing lifecycle methods**: In class components, lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` are used to manage side effects. `useEffect` provides a way to perform similar tasks in functional components.
- **Declarative approach**: `useEffect` allows you to declare side effects directly inside your components, making your code more declarative and easier to understand.

### Common patterns and considerations:

- **Dependency array**: `useEffect` accepts a dependency array as the second argument. It's important to include all dependencies that are used inside the effect. If any of these dependencies change, the effect will be re-executed.
- **Cleanup function**: You can return a cleanup function from `useEffect`, which is useful for cleaning up resources, unsubscribing from events, or canceling asynchronous tasks when the component unmounts or before the effect is re-executed.
