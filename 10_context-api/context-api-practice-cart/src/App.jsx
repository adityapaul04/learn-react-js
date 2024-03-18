import './App.css'
import Items from './components/Items'
import { CartContextProvider } from './context/CartContext'
import Cart from './components/Cart'

function App() {

  return (
    <CartContextProvider>
      <Items name="Macbook Pro" price="100000"/>
      <Items name="Iphone" price="65000"/>
      <Items name="Headset" price="5000"/>
      <Cart/>
    </CartContextProvider>
  )
}

export default App
