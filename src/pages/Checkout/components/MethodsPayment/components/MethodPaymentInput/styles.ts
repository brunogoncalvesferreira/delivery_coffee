import styled from 'styled-components'

export const PaymentContainer = styled.div`
  flex: 1;

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

  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-error']};
    margin-top: -0.5rem;
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

  user-select: none;
`
