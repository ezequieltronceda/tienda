import React from 'react'
import prox from "./assets/proximamente.png"

export const ItemList = (props) => {
  return (
    <article> 
        <img src={prox} alt="" />
        <p className='prdDescription'>{props.detalle}</p>
    </article>
  )
}
