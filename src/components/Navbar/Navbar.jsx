import React from 'react'
import logotipo from "./assets/logotipo.png"
import { CartWidget } from './CartWidget'

export const Navbar = () => {
  return (
    <nav>
        <img src={logotipo}alt="logo de la empresa vergine, dedicada a la fabricacion cosmetica" className='logo' />
        <ul>
          <li>Cremas</li>
          <li>Lociones</li>
          <li>Serums</li>
        </ul>
        <CartWidget></CartWidget>
    </nav>
  )
}
