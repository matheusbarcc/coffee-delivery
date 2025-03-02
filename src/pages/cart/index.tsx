import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
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
} from './style'
import { PaymentRadio } from '../../components/PaymentRadio'

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
        </div>
      </Container>
    </form>
  )
}
