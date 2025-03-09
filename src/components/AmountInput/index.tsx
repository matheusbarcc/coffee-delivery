import { Minus, Plus } from '@phosphor-icons/react'
import { Container } from './style'

export interface AmountInputProps {
  amount: number
  increaseAmount: () => void
  decreaseAmount: () => void
  disabled?: boolean
}

export function AmountInput({
  amount,
  increaseAmount,
  decreaseAmount,
  disabled,
}: AmountInputProps) {
  return (
    <Container>
      <button
        type="button"
        disabled={amount === 1 || disabled}
        onClick={decreaseAmount}
      >
        <Minus />
      </button>
      {amount}
      <button disabled={disabled} type="button" onClick={increaseAmount}>
        <Plus />
      </button>
    </Container>
  )
}
