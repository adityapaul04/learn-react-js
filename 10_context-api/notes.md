## Context API in React

### Introduction
- The Context API is a feature in React that allows you to manage global state or shared data without having to pass props manually through multiple levels of components.
- It provides a way to share values like themes, locales, authentication status, etc., across the entire component tree without explicitly passing them through each component.

### Key Components
1. **`createContext()`**: 
   - The `createContext()` function is used to create a new context object.
   - It returns an object with `Provider` and `Consumer` components.

2. **`<MyContext.Provider>`**: 
   - The `<Provider>` component is used to wrap the components that need access to the context.
   - It accepts a `value` prop which provides the data to be shared.

4. **`useContext()` Hook**:
   - The `useContext()` hook is introduced in React 16.8 to consume context in functional components.
   - It allows you to access the context value directly without using a consumer component.

### Usage
1. **Creating Context**:
   ```javascript
   const MyContext = React.createContext(defaultValue);
   ```

2. **Providing Context Value**:
   ```jsx
   <MyContext.Provider value={/* your data */}>
   {/* Nested components that can consume the context */}\</MyContext.Provider>
   ```

3. **Using useContext() hook**:
```javascript
const value = useContext(MyContext);
```

**Example**
```jsx
// ThemeContext.js
import React, { createContext, useState } from 'react';

// Create context with a default value
const ThemeContext = createContext('light');

// Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
```

```jsx
// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
```

```jsx
// ThemedComponent.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemedComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemedComponent;
```

**Conclusion**
- The Context API simplifies state management in React applications by allowing the sharing of data across components.
- It eliminates the need for prop drilling and makes the codebase more maintainable and scalable.
- The introduction of hooks, especially useContext(), has made consuming context values more straightforward in functional components.
- It's important to use context judiciously and consider the appropriate level of granularity for the shared data.

*NOTES*
- We can wrap up the main/index file which renders the App.js file with the Provider or else we can go to the App.js file and wrap up the components with the Provider.
- We can create a hook inside the file where we created the context, the hook will use useContext() and export the context we created, this will make it easy to use the context in the components.

