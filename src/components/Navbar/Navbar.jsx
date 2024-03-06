import React from 'react'
import { images } from '../../data/images'
import { CartWidget } from './CartWidget'

export const Navbar = () => {
  return (
    <nav>
        <img src={images.logotipo}alt="logo de la empresa vergine, dedicada a la fabricacion cosmetica" className='logo' />
        <ul>
          <li>Cremas</li>
          <li>Lociones</li>
          <li>Serums</li>
        </ul>
        <CartWidget></CartWidget>
    </nav>
  )
}
