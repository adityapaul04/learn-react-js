import './App.css'
import CounterComponent from './components/CounterComponent'
import { useCount } from './context/Counter'

function App() {

  const counter = useCount();
  console.log(counter)

  return (
    <>
      <h1>Count: {counter.count}</h1>
      <CounterComponent />
      <CounterComponent />
      <CounterComponent />
      <CounterComponent />
    </>
  )
}

export default App
