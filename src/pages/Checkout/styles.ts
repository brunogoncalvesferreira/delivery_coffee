import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 10rem;

  padding-bottom: 8.25rem;
`

export const FormContainer = styled.form`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  flex: 1;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }
`

export const Wrapper = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  header {
    display: flex;
    align-items: self-start;
    gap: 0.5rem;
  }

  header div h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
    font-weight: 400;
  }

  header div p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
  }
`

export const FormPayment = styled.div``

export const PaymentCard = styled.div`
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
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ConfirmContainer = styled.div`
  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }
`

export const SelectedOrders = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  padding: 2.5rem;

  margin-top: 0.75rem;
`
