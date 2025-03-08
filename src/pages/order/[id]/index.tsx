import { MapPin } from '@phosphor-icons/react/dist/ssr'
import { Container, Content, Heading, OrderSummary, SummaryItem } from './style'
import { theme } from '../../../styles/globals'
import { CurrencyDollar, Timer } from '@phosphor-icons/react'
import success from '../../../../public/images/success.svg'
import Image from 'next/image'

export default function Order() {
  return (
    <Container>
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
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
                <br />
                Farrapos - Porto Alegre, RS
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
                style={{ backgroundColor: theme.colors['yellow-dark'].value }}
              />
              <div>
                Pagamento na entrega
                <br />
                <span>Cartão de Crédito</span>
              </div>
            </SummaryItem>
          </div>
        </OrderSummary>
        <Image src={success} alt="" />
      </Content>
    </Container>
  )
}
