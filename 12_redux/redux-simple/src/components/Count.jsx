import React from 'react'
import { useSelector } from 'react-redux'

function Count() {
    const count = useSelector((state) => state)
    return (
        <div>Count: {count}</div>
    )
}

export default Count