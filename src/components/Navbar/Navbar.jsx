import React from 'react'
import { images } from '../../data/images'
import { CartWidget } from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <Link to={"/"} className='logo'><img src={images.logotipo}alt="logo de la empresa vergine, dedicada a la fabricacion cosmetica" className='logo' /></Link>
        <ul>
          <NavLink className='link' to="category/crema">Cremas</NavLink>
          <NavLink className='link' to="category/locion">Lociones</NavLink>
          <NavLink className='link' to="category/serum">Serums</NavLink>
          
          
        </ul>
        <CartWidget></CartWidget>
    </nav>
  )
}
