import { MapPin } from '@phosphor-icons/react/dist/ssr'
import {
  Container,
  Content,
  Heading,
  OrderSummary,
  SummaryItem,
} from '../../../styles/order'
import { theme } from '../../../styles/globals'
import { ArrowRight, CurrencyDollar, Timer } from '@phosphor-icons/react'
import success from '../../../../public/images/success.svg'
import Image from 'next/image'
import { useCart } from '../../../hooks/useCart'
import { useRouter } from 'next/router'

export default function Order() {
  const router = useRouter()
  const { orders } = useCart()

  const { id } = router.query

  const orderInfo = orders.find((order) => order.id.toString() === id)

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de debito',
    cash: 'Dinheiro',
  }

  return (
    <Container>
      {orderInfo ? (
        <>
          <Heading>
            <h1>Uhuu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </Heading>
          <Content>
            <OrderSummary>
              <div>
                <SummaryItem>
                  <MapPin
                    size={35}
                    weight="fill"
                    color={theme.colors.background.value}
                    style={{ backgroundColor: theme.colors.purple.value }}
                  />
                  <div>
                    Entrega em{' '}
                    <span>
                      {orderInfo.street}, {orderInfo.number}
                    </span>
                    <br />
                    {orderInfo.neighborhood} - {orderInfo.city},{' '}
                    {orderInfo.state}
                  </div>
                </SummaryItem>
                <SummaryItem>
                  <Timer
                    size={35}
                    weight="fill"
                    color={theme.colors.background.value}
                    style={{ backgroundColor: theme.colors.yellow.value }}
                  />
                  <div>
                    Previsão de entrega
                    <br />
                    <span>20 min - 30 min</span>
                  </div>
                </SummaryItem>
                <SummaryItem>
                  <CurrencyDollar
                    size={35}
                    color={theme.colors.background.value}
                    style={{
                      backgroundColor: theme.colors['yellow-dark'].value,
                    }}
                  />
                  <div>
                    Pagamento na entrega
                    <br />
                    <span>{paymentMethod[orderInfo.paymentMethod]}</span>
                  </div>
                </SummaryItem>
              </div>
            </OrderSummary>
            <Image src={success} alt="" />
          </Content>
        </>
      ) : (
        <Heading>
          <h1>Pedido não encontrado :(</h1>
          <p>O pedido que você está tentando acessar não foi encontrado</p>

          <button onClick={() => router.push('/')}>
            VOLTAR PARA O INÍCIO <ArrowRight weight="bold" size={20} />
          </button>
        </Heading>
      )}
    </Container>
  )
}
