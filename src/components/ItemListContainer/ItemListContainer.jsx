import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { productos } from '../../data/data'

export const ItemListContainer = (props) => {
  const [misProductos, setMisProductos] = useState([])
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos)
    }, 2000);
  })
  useEffect(()=>{
    promesa.then(data=>{setMisProductos(data)
    })
  },[])

  return (
   <section>
    <ItemList products={misProductos}></ItemList>
   </section>
  )
}
