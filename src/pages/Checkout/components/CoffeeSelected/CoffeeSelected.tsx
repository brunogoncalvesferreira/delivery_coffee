import decrement from '../../../../assets/decrement.svg'
import increment from '../../../../assets/increment.svg'
import trash from '../../../../assets/trash.svg'

import coffee from '../../../../assets/coffee1.svg'
import {
  ActionsBtn,
  ButtonsContainer,
  CoffeeSelectedContainer,
  Container,
  CoffeeSelectedImg,
} from './styles'

export function CoffeeSelected() {
  return (
    <Container>
      <CoffeeSelectedImg src={coffee} alt="" />
      <CoffeeSelectedContainer>
        <h4>Expresso Tradicional</h4>
        <ButtonsContainer>
          <ActionsBtn>
            <button>
              <img src={decrement} alt="" />
            </button>
            <span>1</span>
            <button>
              <img src={increment} alt="" />
            </button>
          </ActionsBtn>
          <button className="trash">
            <img src={trash} alt="" />
            Remover
          </button>
        </ButtonsContainer>
      </CoffeeSelectedContainer>
      <strong>R$ 9,90</strong>
    </Container>
  )
}
