import { forwardRef, InputHTMLAttributes, Ref } from 'react'
import { FieldError } from 'react-hook-form'
import { Container, ErrorMessage, Input } from './style'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: FieldError
  css?: any
}

export const TextInput = forwardRef(function TextInput(
  { error, css, ...rest }: Props,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <Container>
      <Input ref={ref} css={css} {...rest} />
      {error?.message ? (
        <ErrorMessage>{error.message}</ErrorMessage>
      ) : (
        <span></span>
      )}
    </Container>
  )
})
