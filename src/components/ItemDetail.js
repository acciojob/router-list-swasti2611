import React from 'react'
import { useParams } from 'react-router-dom'
const ItemDetail = () => {
    let {id}=useParams();
  return (
    <div>
    <h1>Items {id}</h1>
      <p>Description for Item {id}</p>
    </div>
  )
}

export default ItemDetail
