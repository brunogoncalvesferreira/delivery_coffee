import { useCart } from '../../../../hooks/useCart'
import { Container } from './styles'

export function InfoValues() {
  const { sumItemsInCart, totalSumWithDelivery } = useCart()

  const totalItamsCart = sumItemsInCart()
  const totalWithDelivery = totalSumWithDelivery()
  return (
    <Container>
      <div>
        <h3>Total de itens</h3>
        <strong>R$ {totalItamsCart.toFixed(2).replace('.', ',')}</strong>
      </div>

      <div>
        <h3>Entrega</h3>
        <strong>R$ 3,50</strong>
      </div>

      <div className="total">
        <h3>Total</h3>
        <strong>R$ {totalWithDelivery.toFixed(2).replace('.', ',')}</strong>
      </div>

      <input type="submit" value={'CONFIRMAR PEDIDO'} />
    </Container>
  )
}
