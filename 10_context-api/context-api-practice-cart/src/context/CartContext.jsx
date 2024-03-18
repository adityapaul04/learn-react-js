import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({ children }) => {
    const [items, setItems] = useState([])
    return (
        <CartContext.Provider value={{items, setItems}}>
            {children}
        </CartContext.Provider>
    )
}