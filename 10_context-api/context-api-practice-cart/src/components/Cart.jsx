import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {

    const cart = useContext(CartContext);

    const total = cart.items.reduce((acc, item) => acc + parseFloat(item.price), 0)

  return (
    <>
    <h1>Cart</h1>
    {cart && cart.items.map((item)=>{
        return (
        <li>
            {item.name} - Rs{item.price}
        </li>
    )})}
    <h4>Total Price: Rs{total}</h4>
    </>
  )
}

export default Cart