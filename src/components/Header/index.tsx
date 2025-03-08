import {
  ActionsContainer,
  Cart,
  Container,
  ItemAmount,
  Location,
} from './style'
import logo from '../../../public/logo.svg'
import Image from 'next/image'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()

  return (
    <Container>
      <Image src={logo} alt="" />

      <ActionsContainer>
        <Location>
          <MapPin weight="fill" size={22} />
          <span>Florianópolis, SC</span>
        </Location>
        <Cart>
          <ShoppingCart weight="fill" size={22} />
          {cart.length > 0 && <ItemAmount>{cart.length}</ItemAmount>}
        </Cart>
      </ActionsContainer>
    </Container>
  )
}
