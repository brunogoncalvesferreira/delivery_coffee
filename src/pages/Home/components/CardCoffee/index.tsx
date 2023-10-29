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
import cart from '../../../../assets/btn-cart.svg'

interface CardCoffeeProps {
  image: string
  title: string
  description: string
  price: number
}

export function CardCoffee({
  image,
  title,
  description,
  price,
}: CardCoffeeProps) {
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
          <button>
            <img src={decrement} alt="Imagem sinal de menos" />
          </button>
          <input value={0} />
          <button>
            <img src={increment} alt="Imagem sinal de mais" />
          </button>
        </ButtonsActions>

        <BtnCart>
          <img src={cart} alt="Imagem de um carrinho de compras" />
        </BtnCart>
      </ContentActions>
    </ContainerCardCoffee>
  )
}
