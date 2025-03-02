import { ActionsContainer, Cart, Container, Location } from './style'
import logo from '../../../public/logo.svg'
import Image from 'next/image'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
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
        </Cart>
      </ActionsContainer>
    </Container>
  )
}
