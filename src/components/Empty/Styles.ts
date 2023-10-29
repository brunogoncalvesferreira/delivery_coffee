import styled from 'styled-components'

export const Title = styled.h4`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 1.125rem;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 1.3;
  margin-bottom: 1.5rem;

  width: 23rem;
  text-align: center;
`
