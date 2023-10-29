import { HeaderContainer } from './style'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import logoCoffee from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { itemsInCart } = useCart()
  return (
    <>
      <HeaderContainer>
        <NavLink to={'/'}>
          <img src={logoCoffee} alt="" />
        </NavLink>

        <nav>
          <div>
            <MapPin />
            <strong>Juiz de Fora - MG</strong>
          </div>
          <NavLink to={'/checkout'}>
            <ShoppingCart />
            <span>{itemsInCart}</span>
          </NavLink>
        </nav>
      </HeaderContainer>
    </>
  )
}
