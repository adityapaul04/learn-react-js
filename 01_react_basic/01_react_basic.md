# React: A JavaScript Library for Building User Interfaces

## What is React?

React is a JavaScript library for building user interfaces. It was developed by Facebook and released as an open-source project in 2013. React allows developers to create reusable UI components and manage their state efficiently. It follows a component-based architecture, where UIs are composed of small, self-contained components.

## Why React?

**Component-Based Architecture:** React encourages a modular approach to building UIs. Components can be easily reused, composed, and nested within each other, leading to a more organized and maintainable codebase.

**Virtual DOM:** React uses a virtual DOM to efficiently update the UI. Instead of directly manipulating the DOM, React compares the virtual DOM with the actual DOM and only applies the necessary changes, resulting in better performance.

**Declarative Syntax:** React uses a declarative syntax to describe how the UI should look based on the current state. This makes the code more predictable and easier to understand compared to imperative approaches.

**JSX:** JSX is a syntax extension for JavaScript that allows you to write HTML-like code directly within your JavaScript files. This makes it easier to create and visualize UI components, as well as enabling the use of JavaScript expressions within your UI.

## How to Create a React App?

A basic React app can be created by using `npx create-react-app appName`. `npx` is a Node package executor, while `npm` is a Node package manager. `npx` executes packages directly without requiring installation, and you provide the package name along with the command to execute. `create-react-app` is a utility to create a React app.

### About React App

Whenever we create a React app, it creates many folders and files inside it, but we should look for `package.json` as it is the main entry point to understand a React project. This file contains all the necessary info about the project. There are scripts inside the `package.json`, which allows us to run the React project, such as `start`, `build`, etc.

To run the React project we should use `npm run start` or `npm start`.

**Note:** Nowadays, we avoid using `create-react-app` or avoid creating a traditional React app because it is very heavy and bulky as we have seen the installation time. It also installs some packages which are not really needed in the initial phase of a React project or sometimes even in the full lifetime of a React project.
Now a days developers prefer a light weight setups to create react apps, also known as bundlers such as vite, parcel etc.

## Cleaning of Files in a React Project

When creating a new React project, various unnecessary files and code snippets may clutter the project structure. Here's a guide on cleaning up your project by removing unnecessary files and code:

1. **Deleting Unnecessary Files in the `src` Folder:**

   Navigate to the `src` folder of your React project and delete all files except `App.js` and `index.js`. These two files are essential for defining the root component of your React application and rendering it to the DOM.

2. **Cleaning up `App.js`:**

   Open `App.js` and remove any comments and unnecessary code. Ensure that the file contains only the essential code related to your application's main component. Here's an example of how `App.js` might look after cleaning:

   ```javascript
   import React from 'react';

   function App() {
       return (
           <div className="App">
               {/* Your main component code goes here */}
           </div>
       );
   }

   export default App;
   ```

3. **Cleaning up `index.js`:**

   Similarly, open `index.js` and remove any comments and unnecessary code. This file is responsible for rendering the root component of your React application to the DOM. Here's an example of how `index.js` might look after cleaning:

   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';
   import App from './App';

   ReactDOM.render(
       <React.StrictMode>
           <App />
       </React.StrictMode>,
       document.getElementById('root')
   );
   ```

## Understanding File Structure of a React Project

1. **node_modules:**
   - Contains all the dependencies installed for the project as specified in the package.json file.
   - It's a bulky folder and is not typically included when sharing or deploying the project.
   - Can be recreated using `npm install` or `npm i` if deleted.

2. **.gitignore:**
   - Contains a list of files and directories that should be ignored by version control systems like Git.
   - Helps in keeping the repository clean and avoiding unnecessary files from being committed.

3. **package.json:**
   - Contains metadata about the project such as its name, version, description, dependencies, and scripts.
   - Lists all the dependencies required by the project along with their versions.
   - Used by npm (Node Package Manager) to manage project dependencies and scripts.

4. **package-lock.json:**
   - Locks down the version of dependencies installed in the project.
   - Ensures that the same versions of dependencies are installed across different environments.
   - Generated automatically by npm to maintain consistency and reproducibility of builds.

5. **public/index.html:**
   - The main HTML file that loads in the browser.
   - Contains a single `<div>` element with an id of "root" where React components are rendered.
   - Typically used in single-page applications (SPAs) where the entire UI is rendered dynamically using JavaScript.

6. **src/App.js:**
   - The root component of the React application.
   - Contains a function that returns a single element, often rendering other components based on the current route or state.
   - Responsible for defining the structure and behavior of the main application.

7. **src/index.js:**
   - The entry point of the React application.
   - Imports React, ReactDOM, and the App component.
   - Uses ReactDOM to render the `<App/>` component into the HTML element with the id of "root" in the index.html file.
   - JSX syntax is used to define and render React components.

### How JavaScript is Loaded?
React applications do not directly include JavaScript files in the HTML file. Instead, the loading of JavaScript is managed by the react-scripts dependency in the background, as specified in the package.json file. This allows for a more modular and efficient development workflow.


### *Note:* 
In React, all components should adhere to the following conventions:
- Component filenames should start with a capital letter and have the .jsx extension or .js extension.
- The function name inside the component file should also start with a capital letter.
- Remember that components should be exported at the end.

These conventions ensure consistency and help maintain a clean and organized codebase in Vite React projects.

- Remember that App.js returns single element, <fragment> ... <fragment/>.