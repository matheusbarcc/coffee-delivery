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
  Input,
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

export default function Cart() {
  return (
    <form>
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
              <Input placeholder="CEP" css={{ maxWidth: '200px' }} />
              <Input placeholder="Rua" />
              <div>
                <Input placeholder="Número" css={{ maxWidth: '200px' }} />
                <Input
                  placeholder="Complemento (opcional)"
                  css={{ width: '100%' }}
                />
              </div>
              <div>
                <Input placeholder="Bairro" />
                <Input placeholder="Cidade" css={{ minWidth: '276px' }} />
                <Input placeholder="UF" css={{ width: '100%' }} />
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
            <PaymentRadioForm>
              <PaymentRadio isSelected={true}>
                <CreditCard size={16} />
                <span>CARTÃO DE CRÉDITO</span>
              </PaymentRadio>
              <PaymentRadio isSelected={false}>
                <Bank size={16} />
                <span>CARTÃO DE DÉBITO</span>
              </PaymentRadio>
              <PaymentRadio isSelected={false}>
                <Money size={16} />
                <span>DINHEIRO</span>
              </PaymentRadio>
            </PaymentRadioForm>
          </PaymentContainer>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <CartSummaryContainer>
            <CartItem>
              <Image src={coffees[0].image} alt="" width={64} height={64} />
              <div>
                <CartItemInfo>
                  {coffees[0].title}{' '}
                  <span>
                    {coffees[0].price.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                </CartItemInfo>
                <CartItemActions>
                  <AmountInput
                    amount={1}
                    increaseAmount={() => null}
                    decreaseAmount={() => null}
                  />
                  <button>
                    <Trash size={19} />
                    REMOVER
                  </button>
                </CartItemActions>
              </div>
            </CartItem>
            <Subtotal>
              <div>
                Total de itens <span>R$ 29,70</span>
              </div>
              <div>
                Entrega <span>R$ 3,50</span>
              </div>
              <div>
                Total <span>R$ 33,20</span>
              </div>
            </Subtotal>
            <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
          </CartSummaryContainer>
        </div>
      </Container>
    </form>
  )
}
