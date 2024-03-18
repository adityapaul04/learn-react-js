import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Items({name,price}) {

    const cart = useContext(CartContext);
    console.log(cart)

  return (
    <>
    <div>Item name: {name}</div>
    <div>Item price: {price}</div>
    <button onClick={()=>cart.setItems([...cart.items, {name, price}])}>Add to cart</button>
    </>
  )
}

export default Items