import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() { //function name should start with uppercase letter MyApp
  return (
    <div>
      Hello myApp World
    </div>
  )
}

let a = 15;

const reactElement = React.createElement( //This is similar that we created in out custom react
  "a",
  {
    href: "https://google.com", target: "_blank"
  },
  "Click here to visit google",
  a //Variable a comes in the end
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   myApp()
  // </React.StrictMode>, This wont work because of strict mode.

  // MyApp() //This works as myApp is a function we can call this like this but we will not as per react rules.
  <>
    reactElement
    <App />
  </>
)
