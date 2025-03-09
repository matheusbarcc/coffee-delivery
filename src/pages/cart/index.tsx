import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import {
  AddressContainer,
  AddressHeading,
  AddressForm,
  Container,
  PaymentContainer,
  PaymentHeading,
  PaymentRadioForm,
  CartSummaryContainer,
  CartItem,
  CartItemActions,
  CartItemInfo,
  Subtotal,
  ConfirmButton,
} from './style'
import { PaymentRadio } from '../../components/PaymentRadio'
import Image from 'next/image'

import { coffees } from '../../../data.json'
import { AmountInput } from '../../components/AmountInput'
import { z } from 'zod'
import { useCart } from '../../hooks/useCart'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextInput } from '../../components/TextInput'
import { ErrorMessage } from '../../components/TextInput/style'

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe um CEP válido' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.number({ invalid_type_error: 'Informe o número' }),
  complement: z.string().optional().nullable(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe o estado'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe a forma de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

export default function Cart() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newOrder),
  })

  const {
    cart,
    removeItem,
    increaseItemAmount,
    decreaseItemAmount,
    checkoutCart,
  } = useCart()

  const coffeesInCart = cart.map((item) => {
    const coffee = coffees.find((c) => item.id === c.id)

    if (!coffee) {
      throw new Error('Coffee not found!')
    }

    return {
      ...coffee,
      amount: item.amount,
    }
  })

  function handleIncreaseItemAmount(itemId: string) {
    increaseItemAmount(itemId)
  }

  function handleDecreaseItemAmount(itemId: string) {
    decreaseItemAmount(itemId)
  }

  function handleRemoveItem(itemId: string) {
    removeItem(itemId)
  }

  function handleOrderSubmit(data: OrderInfo) {
    checkoutCart(data)
  }

  const totalItensPrice = coffeesInCart.reduce((totalValue, currentItem) => {
    return (totalValue += currentItem.price * currentItem.amount)
  }, 0)

  let deliveryValue = 0

  if (coffeesInCart.length > 0) {
    deliveryValue = 3.5
  }

  const selectedPaymentMethod = watch('paymentMethod')

  return (
    <form onSubmit={handleSubmit(handleOrderSubmit)}>
      <Container>
        <div>
          <h2>Complete seu pedido</h2>
          <AddressContainer>
            <AddressHeading>
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeading>
            <AddressForm>
              <div className="text-input-container">
                <TextInput
                  placeholder="CEP"
                  css={{ maxWidth: '200px' }}
                  {...register('cep', { valueAsNumber: true })}
                  error={errors.cep}
                />
              </div>

              <div className="text-input-container">
                <TextInput
                  placeholder="Rua"
                  {...register('street')}
                  error={errors.street}
                />
              </div>

              <div style={{ gridTemplateColumns: '200px 1fr' }}>
                <TextInput
                  placeholder="Número"
                  {...register('number', { valueAsNumber: true })}
                  error={errors.number}
                />
                <TextInput
                  placeholder="Complemento (opcional)"
                  {...register('complement')}
                  error={errors.complement}
                />
              </div>

              <div style={{ gridTemplateColumns: '200px 276px 1fr' }}>
                <TextInput
                  placeholder="Bairro"
                  {...register('neighborhood')}
                  error={errors.neighborhood}
                />
                <TextInput
                  placeholder="Cidade"
                  {...register('city')}
                  error={errors.city}
                />
                <TextInput
                  placeholder="UF"
                  {...register('state')}
                  error={errors.state}
                />
              </div>
            </AddressForm>
          </AddressContainer>
          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>
            <div>
              <PaymentRadioForm>
                <PaymentRadio
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>CARTÃO DE CRÉDITO</span>
                </PaymentRadio>
                <PaymentRadio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>CARTÃO DE DÉBITO</span>
                </PaymentRadio>
                <PaymentRadio
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
                  <Money size={16} />
                  <span>DINHEIRO</span>
                </PaymentRadio>
              </PaymentRadioForm>
              {errors.paymentMethod && (
                <ErrorMessage>{errors.paymentMethod.message}</ErrorMessage>
              )}
            </div>
          </PaymentContainer>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <CartSummaryContainer>
            {coffeesInCart.map((coffee) => (
              <CartItem key={coffee.id}>
                <Image src={coffee.image} alt="" width={64} height={64} />
                <div>
                  <CartItemInfo>
                    {coffee.title}{' '}
                    <span>
                      {coffee.price.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </span>
                  </CartItemInfo>
                  <CartItemActions>
                    <AmountInput
                      amount={coffee.amount}
                      increaseAmount={() => handleIncreaseItemAmount(coffee.id)}
                      decreaseAmount={() => handleDecreaseItemAmount(coffee.id)}
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(coffee.id)}
                    >
                      <Trash size={19} />
                      REMOVER
                    </button>
                  </CartItemActions>
                </div>
              </CartItem>
            ))}
            <Subtotal>
              <div>
                Total de itens{' '}
                <span>
                  {totalItensPrice.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </div>
              <div>
                Entrega{' '}
                <span>
                  {deliveryValue.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </div>
              <div>
                Total{' '}
                <span>
                  {(totalItensPrice + deliveryValue).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </div>
            </Subtotal>
            <ConfirmButton disabled={coffeesInCart.length < 1} type="submit">
              {coffeesInCart.length > 0 ? (
                <span>CONFIRMAR PEDIDO</span>
              ) : (
                <span>NENHUM ITEM SELECIONADO</span>
              )}
            </ConfirmButton>
          </CartSummaryContainer>
        </div>
      </Container>
    </form>
  )
}
