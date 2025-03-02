import { Hero, HeroContent, Heading, Items } from './style'
import background from '../../../assets/images/background.png'
import heroImage from '../../../assets/images/hero-image.png'
import Image from 'next/image'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { theme } from '../../styles/globals'

export default function Home() {
  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </Heading>
            <Items>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background.value}
                  style={{ backgroundColor: theme.colors['yellow-dark'].value }}
                />
                Compra simples e segura
              </div>
              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background.value}
                  style={{ backgroundColor: theme.colors['base-text'].value }}
                />
                Embalagem mantém o café intacto
              </div>
              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background.value}
                  style={{ backgroundColor: theme.colors.yellow.value }}
                />
                Entrega rápida e rastreada
              </div>
              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.background.value}
                  style={{ backgroundColor: theme.colors.purple.value }}
                />
                O café chega fresquinho até você
              </div>
            </Items>
          </div>
          <Image src={heroImage} alt="" />
        </HeroContent>
        <Image src={background} id="hero-bg" alt="" />
      </Hero>
    </div>
  )
}
