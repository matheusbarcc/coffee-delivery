import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'

import { Container } from './style'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const PaymentRadio = forwardRef(function Radio(
  { children, isSelected, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <Container data-state={isSelected}>
      <input type="radio" checked={isSelected} ref={ref} {...rest} />
      {children}
    </Container>
  )
})
