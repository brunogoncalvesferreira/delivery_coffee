import icon1 from '../../../../assets/item1.svg'
import icon2 from '../../../../assets/item2.svg'
import icon3 from '../../../../assets/item3.svg'
import icon4 from '../../../../assets/item4.svg'
import { Wrapper } from './styles'

const data = [
  { icon: icon1, text: 'Compra simples e segura' },
  { icon: icon2, text: 'Embalagem mantém o café intacto' },
  { icon: icon3, text: 'Entrega rápida e rastreada' },
  { icon: icon4, text: 'O café chega fresquinho até você' },
]

export function ListInfo() {
  return (
    <>
      {data.map((item, index) => (
        <Wrapper key={index}>
          <img src={item.icon} alt={item.text} />
          <span>{item.text}</span>
        </Wrapper>
      ))}
    </>
  )
}
