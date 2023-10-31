import styled from 'styled-components'

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: self-start;
  gap: 0.5rem;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
    font-weight: 400;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
  }
`
