import styled from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  margin-top: 2rem;

  button {
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

    &:focus-within {
      border: 1px solid ${(props) => props.theme['purple-dark']};
      background-color: ${(props) => props.theme['purple-light']};
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`
