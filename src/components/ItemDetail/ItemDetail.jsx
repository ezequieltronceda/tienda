import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

export const ItemDetail = ({product}) => {
  return (
    <section className='detailCont' >
    <Link to={"/"} className='link' ><span>◀</span></Link>
    
    <h1> {product.nombre} </h1>
    <article className='detail'>
        
        
        <img src={product.imagen} alt="" />
      
        <div className='detDesc'>
            <p> {product.descripcion} </p>
            <span> $ {product.precio} <span>.00</span> </span>
            <ItemCount></ItemCount>
        </div>
        

    </article>
    </section>
  )
}
