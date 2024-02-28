# Creating and Running a Vite React Project

## What is Vite+React?

Vite is not a library or framework, but a build tool used to develop modern web applications. When paired with React, it provides a fast development environment with instant server start and hot module replacement.

## Creating a Vite React Project

To create a React project using Vite, follow these steps:

1. **Install Vite:**

   Use npm to install the latest version of Vite globally:

   ```bash
   npm install -g create-vite
   ```

2. **Create a Vite React Project:**

   Run the following command in your terminal:

   ```bash
   npm create vite@latest
   ```

   This command will prompt you to enter the project name and choose the framework/library to use. Select "React" when prompted.

3. **Choose Language:**

   After selecting React, you'll be asked which language you want to use. Choose "JavaScript".

4. **Install Dependencies:**

   Once the project is initialized, navigate into the project directory and install dependencies:

   ```bash
   cd your-project-name
   npm install
   ```

   Vite React projects have fewer dependencies compared to traditional React projects.

## Running a Vite React Project

To run your Vite React project, follow these steps:

1. **Check the package.json File:**

   Open the package.json file located in the root directory of your Vite React project.

2. **Locate Scripts:**

   Look for the "scripts" section in package.json. Vite automatically adds scripts for development and building.

3. **Start Development Server:**

   Execute the following command:

   ```bash
   npm run dev
   ```

   This command starts the development server. Vite will launch your default web browser and serve your React application.

   Alternatively, you can use:

   ```bash
   npm start
   ```

4. **Build for Production:**

   To build your Vite React project for production, use the following command:

   ```bash
   npm run build
   ```

   This command generates an optimized production build in the dist directory.

By following these steps, you can create and run a React project using Vite, enjoying fast development and optimized production builds.


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

3. **Cleaning up `main.js`:**

   Similarly, open `main.js` and remove any comments and unnecessary code. This file is responsible for rendering the root component of your React application to the DOM. Here's an example of how `main.js` might look after cleaning:

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

5. **index.html:**
   - The main HTML file that loads in the browser.
   - Contains a single `<div>` element with an id of "root" where React components are rendered.
   - Typically used in single-page applications (SPAs) where the entire UI is rendered dynamically using JavaScript.
   - Includes main.js script directly.

6. **src/App.js:**
   - The root component of the React application.
   - Contains a function that returns a single element, often rendering other components based on the current route or state.
   - Responsible for defining the structure and behavior of the main application.

7. **src/main.js:**
   - The entry point of the React application.
   - Imports React, ReactDOM, and the App component.
   - Uses ReactDOM to render the `<App/>` component into the HTML element with the id of "root" in the index.html file.
   - JSX syntax is used to define and render React components.

### How JavaScript is Loaded?
In Vite, JavaScript loading differs significantly from traditional React projects:
   - Vite leverages modern ES module imports for JavaScript files, providing faster loading times during development.
   - During development, Vite serves JavaScript files directly to index.html, avoiding the need for bundling.
   - In production, Vite optimizes and bundles JavaScript files for deployment, ensuring optimal performance.

### *Note:* 
In Vite, all components should adhere to the following conventions:
- Component filenames should start with a capital letter and have the .jsx extension.
- The function name inside the component file should also start with a capital letter.
- Remember that components should be exported at the end.

These conventions ensure consistency and help maintain a clean and organized codebase in Vite React projects.

- Remember that App.js returns single element, <> ... </>
