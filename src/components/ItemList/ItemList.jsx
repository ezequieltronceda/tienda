import React from 'react'
import { Item } from '../Item/Item'


export const ItemList = ({products}) => {
  return (
    products.map((prd)=> <Item key={prd.id} producto={prd}></Item>)
  )
}
