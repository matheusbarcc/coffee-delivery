/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, InputHTMLAttributes, Ref } from 'react'
import { FieldError } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { Container, ErrorMessage, Input } from './style'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: FieldError
  css?: any
  mask?: string
}

export const TextInput = forwardRef(function TextInput(
  { error, css, mask, ...rest }: Props,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <Container>
      {mask ? (
        <InputMask mask={mask} {...rest}>
          {(inputProps: any) => <Input ref={ref} css={css} {...inputProps} />}
        </InputMask>
      ) : (
        <Input ref={ref} css={css} {...rest} />
      )}
      {error?.message ? (
        <ErrorMessage>{error.message}</ErrorMessage>
      ) : (
        <span></span>
      )}
    </Container>
  )
})
