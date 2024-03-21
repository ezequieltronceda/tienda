import React from 'react'
import { useDetail } from '../Hooks/useDetail'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { productos } from '../../data/data'
export const ItemDetailContainer = () => {

   const {detalle} = useDetail(productos)


  return (
    <ItemDetail product={detalle}></ItemDetail>
  )
}
