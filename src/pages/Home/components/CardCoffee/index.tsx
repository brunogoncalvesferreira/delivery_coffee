import {
  BtnCart,
  ButtonsActions,
  ContainerCardCoffee,
  ContentActions,
  ImageCoffee,
  Title,
} from './styles'
import decrement from '../../../../assets/decrement.svg'
import increment from '../../../../assets/increment.svg'
import Cart from '../../../../assets/btn-cart.svg'
import { useCart } from '../../../../hooks/useCart'
import { ItemsProps } from '../../../../contexts/CoffeeContext'

interface CardCoffeeProps {
  item: ItemsProps
  image: string
  title: string
  description?: string
  price: number
}

export function CardCoffee({
  item,
  image,
  title,
  description,
  price,
}: CardCoffeeProps) {
  const { cart, addToCart, decrementItemCart, quantityOfItem } = useCart()

  function handleAddToCart() {
    addToCart(item)
  }

  function handleRemoverAllQuantityOfItem() {
    decrementItemCart(item)
  }

  const sumItemsInCart = quantityOfItem(item.id)

  return (
    <ContainerCardCoffee>
      <ImageCoffee src={image} alt={'Imagem do café' + title} />
      <Title>Tradicional</Title>
      <h4>{title}</h4>
      <p>{description}</p>
      <ContentActions>
        <strong>
          <span>R$</span> {price.toFixed(2).replace('.', ',')}
        </strong>

        <ButtonsActions>
          <button onClick={handleRemoverAllQuantityOfItem}>
            <img src={decrement} alt="Imagem sinal de menos" />
          </button>
          <span>{sumItemsInCart}</span>
          <button disabled={cart.length === 0} onClick={handleAddToCart}>
            <img src={increment} alt="Imagem sinal de mais" />
          </button>
        </ButtonsActions>

        <BtnCart
          title="Clique é adicione ao carrinho"
          onClick={handleAddToCart}
        >
          <img src={Cart} alt="Imagem de um carrinho de compras" />
        </BtnCart>
      </ContentActions>
    </ContainerCardCoffee>
  )
}
