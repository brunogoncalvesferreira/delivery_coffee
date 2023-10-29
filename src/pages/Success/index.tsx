import { Container, ContentImage, DeliveryInfo, WrapperContent } from './styles'

import map from '../../assets/map.svg'
import time from '../../assets/time.svg'
import payment from '../../assets/payment.svg'
import successImage from '../../assets/success-image.svg'

export function Success() {
  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <WrapperContent>
        <DeliveryInfo>
          <div className="delivery">
            <img src={map} alt="" />
            <p>
              Entrega em <b>Rua José Alberto de castilho, 506</b>
              Filgueiras - Juiz de Fora, MG
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
              Pagamento na entrega <b>Cartão de crédito</b>
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
