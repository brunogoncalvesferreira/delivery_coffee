import { Container, ContentImage, DeliveryInfo, WrapperContent } from './styles'

import map from '../../assets/map.svg'
import time from '../../assets/time.svg'
import payment from '../../assets/payment.svg'
import successImage from '../../assets/success-image.svg'
import { useLocation } from 'react-router-dom'
import { paymentMethods } from '../Checkout/components/MethodsPayment'
import { FormValidation } from '../Checkout'

interface LocationState {
  state: FormValidation
}

export function Success() {
  const { state } = useLocation() as unknown as LocationState

  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <WrapperContent>
        <DeliveryInfo>
          <div className="delivery">
            <img src={map} alt="" />
            <p>
              Entrega em {''}
              <b>
                {state.street}, {state.number}
              </b>
              {state.neighborhood} - {state.city}, {state.uf}
            </p>
          </div>

          <div className="time">
            <img src={time} alt="" />
            <p>
              Previsão de entrega <b>20 min - 30 min</b>
            </p>
          </div>

          <div className="payment">
            <img src={payment} alt="" />
            <p>
              Pagamento na entrega{' '}
              <b>{paymentMethods[state.methodPayment].label}</b>
            </p>
          </div>
        </DeliveryInfo>
        <ContentImage>
          <img src={successImage} alt="" />
        </ContentImage>
      </WrapperContent>
    </Container>
  )
}
