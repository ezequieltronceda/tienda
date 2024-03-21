import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const useDetail = (argumento) => {
    const {idItem} = useParams()
    
    const [detalle, setDetalle] = useState({})
    const conseguirDetalle = new Promise((resolve) => {
        setTimeout(() => {
            resolve(argumento)
        }, 500);
        
    })
    useEffect(()=>{
        conseguirDetalle.then((data)=> {
            setDetalle(
                 data.find((prd)=> prd.id === parseInt(idItem))
            )
        })
    },[idItem])
    

  return {detalle}
  
}
