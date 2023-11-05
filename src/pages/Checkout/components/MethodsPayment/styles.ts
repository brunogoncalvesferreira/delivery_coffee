import styled from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  margin-top: 2rem;

  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};

    &:hover {
      background: ${(props) => props.theme['purple-light']};
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  background: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;

  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 1.3;
  text-transform: uppercase;
  transition: 0.4s;
`
