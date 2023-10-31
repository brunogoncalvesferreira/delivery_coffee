import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 10rem;

  padding-bottom: 8.25rem;

  form {
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
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
`

export const FormPayment = styled.div``

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
