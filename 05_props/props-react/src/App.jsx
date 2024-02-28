import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let myArr = [1,2,3,4,5];
  let myObj = {
    key: 1,
    lock: 2,
  }

  return (
    <>
      {/* Passing Props to Card.js
      an variable, object or array can be also passed as props. */}
      <Card userName="Aditya" btnName = "Click Me" arr = {myArr}/>
      <Card userName="Priya" btnName = "Visit" obj = {myObj}/>
    </>
  )
}

export default App
