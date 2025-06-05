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
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()
  const { cart } = useCart()

  return (
    <Container>
      <button onClick={() => router.push('/')}>
        <Image src={logo} alt="" />
      </button>

      <ActionsContainer>
        <Location>
          <MapPin weight="fill" size={22} />
          <span>São Paulo, SP</span>
        </Location>
        <Cart onClick={() => router.push('/cart')}>
          <ShoppingCart weight="fill" size={22} />
          {cart.length > 0 && <ItemAmount>{cart.length}</ItemAmount>}
        </Cart>
      </ActionsContainer>
    </Container>
  )
}
