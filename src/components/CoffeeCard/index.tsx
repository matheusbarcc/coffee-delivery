import Image from 'next/image'
import {
  Actions,
  Container,
  Footer,
  Heading,
  PriceTag,
  Tag,
  TagsContainer,
} from './style'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { AmountInput } from '../AmountInput'

export interface CoffeeCardProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <Container>
      <Image src={coffee.image} alt="" width={120} height={120} />
      <TagsContainer>
        {coffee.tags.map((tag) => {
          return <Tag key={tag}>{tag.toUpperCase()}</Tag>
        })}
      </TagsContainer>
      <Heading>
        <h2>{coffee.title}</h2>
        <p>{coffee.description}</p>
      </Heading>
      <Footer>
        <PriceTag>
          R${' '}
          <span>
            {coffee.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </span>
        </PriceTag>
        <Actions>
          <AmountInput
            amount={1}
            increaseAmount={() => null}
            decreaseAmount={() => null}
          />
          <button>
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </Actions>
      </Footer>
    </Container>
  )
}
