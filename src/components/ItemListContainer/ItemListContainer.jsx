import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { productos } from '../../data/data'
import { Loader } from '../Loader/Loader'
import { usePromise } from '../Hooks/usePromise'
import { useParams } from 'react-router-dom'

export const ItemListContainer = (props) => {
  const {misProductos} = usePromise(productos)
  const [loading, setLoading] = useState(false)
  const {idCategory} = useParams()
 
  useEffect(()=> {
    setLoading(!loading)
    
  }, [misProductos, idCategory])

  return (
   <section>
    {loading ? <Loader></Loader>: <ItemList products={misProductos}></ItemList>}
    
   </section>
  )
}
