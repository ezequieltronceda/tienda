import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


export const usePromise = (argumento) => {
    const {idCategory} = useParams()
   
    const [misProductos, setMisProductos] = useState([])
    
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
          resolve(argumento)
        }, 1000);
      })
      useEffect(()=>{
        promesa.then(data=>{setMisProductos(idCategory? data.filter((prod)=> prod.categoria === idCategory ) : data)
        })
      
      },[idCategory])
     
  return {misProductos}
    
  
}
