import { ListInfo } from './components/ListInfo'
import {
  ContentImage,
  Container,
  ContentService,
  ContentTitle,
  Main,
  Wrapper,
  ContainerCoffee,
} from './styles'

import image from '../../assets/image.svg'
import { CardCoffee } from './components/CardCoffee/index'

import { useCart } from '../../hooks/useCart'

export function Home() {
  const { items } = useCart()
  return (
    <Container>
      <Main>
        <Wrapper>
          <ContentTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <ContentService>
              <ListInfo />
            </ContentService>
          </ContentTitle>
          <ContentImage>
            <img src={image} alt="Imagem ilustrativa de um café" />
          </ContentImage>
        </Wrapper>

        <h2>Nossos cafés</h2>

        <ContainerCoffee>
          {items.map((coffee) => (
            <CardCoffee
              key={coffee.id}
              item={coffee}
              title={coffee.title}
              image={coffee.image}
              price={coffee.price}
              description={coffee.description}
            />
          ))}
        </ContainerCoffee>
      </Main>
    </Container>
  )
}
