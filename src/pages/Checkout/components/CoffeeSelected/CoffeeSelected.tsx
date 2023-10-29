import decrement from '../../../../assets/decrement.svg'
import increment from '../../../../assets/increment.svg'
import trash from '../../../../assets/trash.svg'
import { useCart } from '../../../../hooks/useCart'
import { ItemsProps } from '../../../../contexts/CoffeeContext'

import {
  ActionsBtn,
  ButtonsContainer,
  CoffeeSelectedContainer,
  Container,
  CoffeeSelectedImg,
} from './styles'

interface CoffeeSelectedProps {
  image: string
  title: string
  price: number
  quantity: number
  item: ItemsProps
}

export function CoffeeSelected({
  item,
  image,
  title,
  price,
  quantity,
}: CoffeeSelectedProps) {
  const { addToCart, decrementItemCart, removeAllQuantityOfItem } = useCart()

  function handleAddToCart() {
    addToCart(item)
  }

  function handleRemoveCart() {
    decrementItemCart(item)
  }

  function handleRemoverAllQuantityOfItem() {
    removeAllQuantityOfItem(item.id)
  }
  return (
    <Container>
      <CoffeeSelectedImg src={image} alt="" />
      <CoffeeSelectedContainer>
        <h4>{title}</h4>
        <ButtonsContainer>
          <ActionsBtn>
            <button onClick={handleRemoveCart}>
              <img src={decrement} alt="" />
            </button>
            <span>{quantity}</span>
            <button onClick={handleAddToCart}>
              <img src={increment} alt="" />
            </button>
          </ActionsBtn>
          <button onClick={handleRemoverAllQuantityOfItem} className="trash">
            <img src={trash} alt="" />
            Remover
          </button>
        </ButtonsContainer>
      </CoffeeSelectedContainer>
      <strong>R$ {price.toFixed(2).replace('.', ',')}</strong>
    </Container>
  )
}
