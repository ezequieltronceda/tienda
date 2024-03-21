import React from 'react'
import { useCount } from '../Hooks/useCount'

export const ItemCount = () => {
    const {count, increment, decrement, addToCart} = useCount()
  return (
    <div className='count'>
        <div>
            <button onClick={decrement}> - </button>
            <span>{count}</span>
            <button onClick={increment}> + </button>
        </div>
        <button onClick={addToCart}> Añadir al carro</button>
    </div>
  )
}
