import React from 'react'
import { images } from '../../data/images'
export const CartWidget = () => {
  return (
    <div className='cartContainer'>
        <img src={images.carritoImg} alt="" className='cartImg'/> <span className='carritoCant'>4</span>
    </div>
  )
}
