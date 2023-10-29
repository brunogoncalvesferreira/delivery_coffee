import {
  AddressContainer,
  ConfirmContainer,
  Container,
  FormContainer,
  FormPayment,
  PaymentCard,
  SelectedOrders,
  Wrapper,
} from './styles'

import map from '../../assets/map-2.svg'
import $ from '../../assets/$.svg'
import credit from '../../assets/credit.svg'
import debit from '../../assets/debit.svg'
import money from '../../assets/money.svg'
import { Inputs } from './components/Inputs/Inputs'
import { CoffeeSelected } from './components/CoffeeSelected/CoffeeSelected'
import { InfoValues } from './components/InfoValues/InfoValues'
import { useCart } from '../../hooks/useCart'
import { Empty } from '../../components/Empty/Empty'

export function Checkout() {
  const { cart } = useCart()
  return (
    <Container>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <AddressContainer>
          <h2>Complete seu pedido</h2>

          <Wrapper>
            <header>
              <img src={map} alt="" />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <Inputs />
          </Wrapper>
          <FormPayment>
            <Wrapper>
              <header>
                <img src={$} alt="" />
                <div>
                  <h3>Pagamento</h3>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </header>

              <PaymentCard>
                <button>
                  <img src={credit} alt="icon crédito" />
                  Cartão de crédito
                </button>
                <button>
                  <img src={debit} alt="icon débito" />
                  Cartão de débito
                </button>
                <button>
                  <img src={money} alt="icon dinheiro" />
                  Dinheiro
                </button>
              </PaymentCard>
            </Wrapper>
          </FormPayment>
        </AddressContainer>
        <ConfirmContainer>
          <h2>Cafés selecionados</h2>
          <SelectedOrders>
            {cart.length === 0 && <Empty />}
            {cart.map((item) => (
              <CoffeeSelected
                key={item.id}
                image={item.image}
                title={item.title}
                quantity={item.quantity}
                price={item.price}
                item={item}
              />
            ))}
            <InfoValues />
          </SelectedOrders>
        </ConfirmContainer>
      </FormContainer>
    </Container>
  )
}
