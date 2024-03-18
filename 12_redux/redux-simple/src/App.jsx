import { useDispatch } from 'react-redux'
import './App.css'
import Count from './components/Count'


function App() {

  const dispatch = useDispatch();

  return (
    <>
      <button onClick={(e) => dispatch({type: "INCREMENT"})}>INCREMENT</button>
      <Count />
      <button onClick={(e) => dispatch({type: "DECREMENT"})}>DECREMENT</button>
    </>
  )
}

export default App
