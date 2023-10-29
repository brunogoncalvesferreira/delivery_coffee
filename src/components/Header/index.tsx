import { HeaderContainer } from './style'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import logoCoffee from '../../assets/logo.svg'

export function Header() {
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
            <span>8</span>
          </NavLink>
        </nav>
      </HeaderContainer>
    </>
  )
}
