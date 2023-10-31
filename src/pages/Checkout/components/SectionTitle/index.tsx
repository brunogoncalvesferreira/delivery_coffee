import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: string
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      <img src={icon} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </SectionTitleContainer>
  )
}
