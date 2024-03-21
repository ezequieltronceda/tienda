import React from 'react'
import { Link } from 'react-router-dom'


export const Item = ({producto}) => {
  
  return (
    <article>
      <img src={producto.imagen} alt={producto.nombre} />
      <div className='prdDescription'>
        <p> {producto.nombre} </p> 
        <div> ${producto.precio} </div>
        <Link to={`/item/${producto.id}`} ><button>Ver más</button></Link>
      </div>
      
    </article>
  )
}
