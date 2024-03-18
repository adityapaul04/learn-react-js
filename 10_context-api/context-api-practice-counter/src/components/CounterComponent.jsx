import React, { useContext } from 'react'
import { counterContext, useCount } from '../context/Counter'

function CounterComponent() {

    const counter = useCount();

    return (
        <>
            <button onClick={() => {counter.setCount(counter.count + 1)}}>Increment</button>
            <button onClick={() => {counter.setCount(counter.count - 1)}}>Decrement</button>
        </>
    )
}

export default CounterComponent