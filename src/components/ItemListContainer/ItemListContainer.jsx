import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { productos } from '../../data/data'
import { Loader } from '../Loader/Loader'

import { usePromise } from '../Hooks/usePromise'

export const ItemListContainer = (props) => {
  const {misProductos} = usePromise(productos)
  const [loading, setLoading] = useState(false)

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
