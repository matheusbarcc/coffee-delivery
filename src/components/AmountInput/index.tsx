import { Minus, Plus } from '@phosphor-icons/react'
import { Container } from './style'

export interface AmountInputProps {
  amount: number
  increaseAmount: () => void
  decreaseAmount: () => void
}

export function AmountInput({
  amount,
  increaseAmount,
  decreaseAmount,
}: AmountInputProps) {
  return (
    <Container>
      <button onClick={decreaseAmount}>
        <Minus />
      </button>
      {amount}
      <button onClick={increaseAmount}>
        <Plus />
      </button>
    </Container>
  )
}
