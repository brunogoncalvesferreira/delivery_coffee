import { InputHTMLAttributes } from 'react'
import { ContentContainer, PaymentContainer } from './styles'

type MethodPaymentInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: string
  label: string
}

export function MethodPaymentInput({
  id,
  icon,
  label,
  ...props
}: MethodPaymentInputProps) {
  return (
    <PaymentContainer>
      <input id={id} type="radio" {...props} name="methodPayment" />
      <label className="label" htmlFor={id}>
        <ContentContainer>
          <img src={icon} alt={label} />
          {label}
        </ContentContainer>
      </label>
    </PaymentContainer>
  )
}
