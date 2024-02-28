import React, { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  //count is the variable.
  //setCount is a function.
  //useState(0) the 0 is the default value of count.
  //useState is responsible for syncing the state and ui of the project. Whenever a change is done in the state, the change is propagated in the DOM.
  //eg: const [state, setState] = useState(initialValue);
  //React tries to control the UI Updation, Suppose the value of count of changing in 10 places in many places in the UI, it would be very difficult to manage the code using JS. So, react uses useState Hook.
  //Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.

  function incrementCounter() {
    if (count < 20) {
      setCount(count + 1);
    }
  }

  function decrementCounter() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={incrementCounter}>Increase Count {count}</button>
      <button onClick={decrementCounter}>Decrease Count {count}</button>
    </>
  );
}

export default App;
