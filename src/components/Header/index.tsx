import { HeaderContainer } from './style'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import logoCoffee from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { itemsCartLength } = useCart()
  return (
    <>
      <HeaderContainer>
        <NavLink to={'/'}>
          <img src={logoCoffee} />
        </NavLink>

        <nav>
          <div>
            <MapPin />
            <strong>Juiz de Fora - MG</strong>
          </div>
          <NavLink to={'/checkout'}>
            <ShoppingCart />
            <span>{itemsCartLength}</span>
          </NavLink>
        </nav>
      </HeaderContainer>
    </>
  )
}
