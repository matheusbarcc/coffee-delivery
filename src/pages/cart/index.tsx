import {
  Bank,
  Check,
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
  ChangeContainer,
  NeighborhoodCityUFContainer,
  NumberComplementContainer,
} from '../../styles/cart'
import { PaymentRadio } from '../../components/PaymentRadio'
import Image from 'next/image'

import data from '../../../data.json'
import { AmountInput } from '../../components/AmountInput'
import { z } from 'zod'
import { useCart } from '../../hooks/useCart'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextInput } from '../../components/TextInput'
import { ErrorMessage } from '../../components/TextInput/style'
import { useEffect } from 'react'

interface AddressInfo {
  bairro: string
  logradouro: string
  localidade: string
  uf: string
  estado: string
  erro?: string
}

const newOrder = z.object({
  cep: z.string().min(1, 'Informe o CEP'),
  street: z.string().min(1, 'Informe a rua'),
  number: z.number({ invalid_type_error: 'Informe o número' }),
  complement: z.string().optional().nullable(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(2, 'Informe o estado').max(2, 'Estado inválido'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe a forma de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

export default function Cart() {
  const { coffees } = data

  const {
    register,
    handleSubmit,
    watch,
    setValue,
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
  const cepValue = watch('cep')

  useEffect(() => {
    async function fetchAddress() {
      if (cepValue && cepValue.toString().length === 9) {
        try {
          const response = await fetch(
            `https://viacep.com.br/ws/${cepValue}/json/`,
          )
          const addressInfo: AddressInfo = await response.json()

          if (!addressInfo.erro) {
            setValue('street', addressInfo.logradouro, {
              shouldValidate: true,
            })
            setValue('neighborhood', addressInfo.bairro, {
              shouldValidate: true,
            })
            setValue('city', addressInfo.localidade, { shouldValidate: true })
            setValue('state', addressInfo.uf, { shouldValidate: true })
          }
        } catch (error) {
          console.error('Error fetching address:', error)
        }
      }
    }

    fetchAddress()
  }, [cepValue, setValue])

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
                  mask="99999-999"
                  placeholder="CEP"
                  css={{ maxWidth: '200px' }}
                  {...register('cep')}
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

              <NumberComplementContainer>
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
              </NumberComplementContainer>

              <NeighborhoodCityUFContainer>
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
              </NeighborhoodCityUFContainer>
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
                  <CreditCard size={23} />
                  <span>CARTÃO DE CRÉDITO</span>
                </PaymentRadio>
                <PaymentRadio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={23} />
                  <span>CARTÃO DE DÉBITO</span>
                </PaymentRadio>
                <PaymentRadio
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
                  <Money size={23} />
                  <span>DINHEIRO</span>
                </PaymentRadio>
              </PaymentRadioForm>
              {errors.paymentMethod && (
                <ErrorMessage>{errors.paymentMethod.message}</ErrorMessage>
              )}
              {selectedPaymentMethod === 'cash' && (
                <ChangeContainer>
                  Troco para{' '}
                  <TextInput
                    placeholder="R$ 00,00"
                    css={{ maxWidth: '178.67px' }}
                  />
                </ChangeContainer>
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
                <>
                  <span>CONFIRMAR PEDIDO</span>
                  <Check weight="bold" size={20} />
                </>
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
