import {
  Hero,
  HeroContent,
  Heading,
  Items,
  CoffeeList,
} from '../../styles/home'
import background from '../../../public/images/background.png'
import heroImage from '../../../public/images/hero-image.png'
import Image from 'next/image'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { theme } from '../../styles/globals'
import { CoffeeCard } from '../../components/CoffeeCard'
import data from '../../../data.json'

export default function Home() {
  const { coffees } = data

  return (
    <div style={{ marginTop: '104px' }}>
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
          <Image src={heroImage} id="hero-img" alt="" />
        </HeroContent>
        <Image src={background} id="hero-bg" alt="" />
      </Hero>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div id="list">
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </div>
      </CoffeeList>
    </div>
  )
}
