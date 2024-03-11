import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {id} = useParams();
  return (
    <div>user id: {id}</div>
  )
}

export default Users