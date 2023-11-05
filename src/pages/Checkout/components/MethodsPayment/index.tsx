import { MethodPaymentInput } from './components/MethodPaymentInput'
import { PaymentMethodsContainer } from './styles'

import credit from '../../../../assets/credit.svg'
import debit from '../../../../assets/debit.svg'
import money from '../../../../assets/money.svg'

const data = [
  {
    title: 'Cartão de crédito',
    icon: credit,
  },
  {
    title: 'Cartão de débito',
    icon: debit,
  },
  {
    title: 'Dinheiro',
    icon: money,
  },
]

export function MethodsPayment() {
  return (
    <PaymentMethodsContainer>
      {data.map((item) => (
        <MethodPaymentInput
          key={item.title}
          title={item.title}
          icon={item.icon}
        />
      ))}
    </PaymentMethodsContainer>
  )
}
