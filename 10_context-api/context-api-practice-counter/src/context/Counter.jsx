import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const counterContext = createContext();

export default function CounterContextProvider({ children }) {
    const [count, setCount] = useState(0);
    return (
        <counterContext.Provider value={{ count, setCount }}>
            {children}
        </counterContext.Provider>
    )
}

export const useCount =() => {
    return useContext(counterContext);
}