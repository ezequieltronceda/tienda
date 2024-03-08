import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { productos } from '../../data/data'
import { Loader } from '../Loader/Loader'

export const ItemListContainer = (props) => {
  const [misProductos, setMisProductos] = useState([])
  const [loading, setLoading] = useState(false)
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos)
    }, 2000);
  })
  useEffect(()=>{
    promesa.then(data=>{setMisProductos(data)
    })
  
  },[])
  useEffect(()=> {
    setLoading(!loading)
  }, [misProductos])

  return (
   <section>
    {loading ? <Loader></Loader>: null}
    <ItemList products={misProductos}></ItemList>
   </section>
  )
}
