import { ContentContainer } from '../../styles'

interface MethodPaymentInputProps {
  title: string
  icon: string
}

export function MethodPaymentInput({ title, icon }: MethodPaymentInputProps) {
  return (
    <>
      <input type="radio" />
      <label className="label" htmlFor="">
        <ContentContainer>
          <img src={icon} alt={title} />
          {title}
        </ContentContainer>
      </label>
    </>
  )
}
