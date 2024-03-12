import React, { useState, useEffect } from 'react'


export const usePromise = (argumento) => {
    const [misProductos, setMisProductos] = useState([])
    
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
          resolve(argumento)
        }, 2000);
      })
      useEffect(()=>{
        promesa.then(data=>{setMisProductos(data)
        })
      
      },[])
     
  return {misProductos}
    
  
}
