import { MethodPaymentInput } from './components/MethodPaymentInput'
import { PaymentMethodsContainer } from './styles'

import credit from '../../../../assets/credit.svg'
import debit from '../../../../assets/debit.svg'
import money from '../../../../assets/money.svg'
import { useFormContext } from 'react-hook-form'

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: credit,
  },
  debit: {
    label: 'Cartão de débito',
    icon: debit,
  },
  money: {
    label: 'Dinheiro',
    icon: money,
  },
}

export function MethodsPayment() {
  const { register } = useFormContext()
  return (
    <PaymentMethodsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <MethodPaymentInput
          icon={icon}
          id={key}
          key={label}
          label={label}
          value={key}
          {...register('methodPayment')}
        />
      ))}
    </PaymentMethodsContainer>
  )
}
