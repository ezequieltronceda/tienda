import React, { useEffect, useState } from 'react'
import { useDetail } from '../Hooks/useDetail'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { productos } from '../../data/data'
import { useParams } from 'react-router-dom'
import { Loader } from '../Loader/Loader'
export const ItemDetailContainer = () => {

   const {detalle} = useDetail(productos)
   const [loading, setLoading] = useState(false)
   const {idItem} = useParams

   useEffect(()=>{
    setLoading(!loading)
   },[idItem, detalle])

  return (
    <section>
    {loading? <Loader></Loader>: <ItemDetail product={detalle}></ItemDetail> }
    </section>
    
  )
}
