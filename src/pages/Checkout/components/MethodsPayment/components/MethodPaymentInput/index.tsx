import credit from '../../../../../../assets/credit.svg'
import debit from '../../../../../../assets/debit.svg'
import money from '../../../../../../assets/money.svg'

export function MethodPaymentInput() {
  return (
    <>
      <button type="button">
        <img src={credit} alt="icon crédito" />
        Cartão de crédito
      </button>
      <button type="button">
        <img src={debit} alt="icon débito" />
        Cartão de débito
      </button>
      <button type="button">
        <img src={money} alt="icon dinheiro" />
        Dinheiro
      </button>
    </>
  )
}
