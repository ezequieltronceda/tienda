import React from 'react'

export const Item = ({producto}) => {
  
  return (
    <article key={producto.id}>
      <img src={producto.imagen} alt={producto.nombre} />
      <div className='prdDescription'>
        <p> {producto.nombre} </p> 
        <div> ${producto.precio} </div>
        <button>Ver más</button>
      </div>
      
    </article>
  )
}
