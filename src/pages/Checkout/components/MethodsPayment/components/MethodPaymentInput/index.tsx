import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { ContentContainer, PaymentContainer } from './styles'
import { useFormContext } from 'react-hook-form'

type MethodPaymentInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: string
  label: string
}

export const MethodPaymentInput = forwardRef<
  HTMLInputElement,
  MethodPaymentInputProps
>(({ id, icon, label, ...props }, ref) => {
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <PaymentContainer>
      <input id={id} type="radio" {...props} name="methodPayment" ref={ref} />
      <label className="label" htmlFor={id}>
        <ContentContainer>
          <img src={icon} alt={label} />
          {label}
        </ContentContainer>
      </label>
      {errors.methodPayment && (
        <span>{errors.methodPayment.message as ReactNode}</span>
      )}
    </PaymentContainer>
  )
})

MethodPaymentInput.displayName = 'MethodPaymentInput'
