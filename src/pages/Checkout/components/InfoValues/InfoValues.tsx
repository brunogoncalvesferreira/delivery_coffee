import { Container } from './styles'

export function InfoValues() {
  return (
    <Container>
      <div>
        <h3>Total de itens</h3>
        <strong>R$ 29,70</strong>
      </div>

      <div>
        <h3>Entrega</h3>
        <strong>R$ 3,50</strong>
      </div>

      <div className="total">
        <h3>Total</h3>
        <strong>R$ 32,30</strong>
      </div>

      <button type="submit">CONFIRMAR PEDIDO</button>
    </Container>
  )
}
