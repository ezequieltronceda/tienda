import React from 'react'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = (props) => {
  return (
    <section>
        <ItemList detalle={props.detalle}></ItemList>
    </section>
  )
}
