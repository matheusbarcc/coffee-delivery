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
import { Check, ShoppingCartSimple } from '@phosphor-icons/react'
import { AmountInput } from '../AmountInput'
import { useCart } from '../../hooks/useCart'
import { useState } from 'react'

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
  const [amount, setAmount] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const { addItem } = useCart()

  function handleIncreaseAmount() {
    setAmount((state) => state + 1)
    console.log(amount)
  }

  function handleDecreaseAmount() {
    if (amount > 1) {
      setAmount((state) => state - 1)
    }
    console.log(amount)
  }

  function handleAddItem() {
    addItem({ id: coffee.id, amount })
    setIsItemAdded(true)
  }

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
            amount={amount}
            increaseAmount={handleIncreaseAmount}
            decreaseAmount={handleDecreaseAmount}
          />
          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <Check weight="bold" size={22} />
            ) : (
              <ShoppingCartSimple weight="fill" size={22} />
            )}
          </button>
        </Actions>
      </Footer>
    </Container>
  )
}
