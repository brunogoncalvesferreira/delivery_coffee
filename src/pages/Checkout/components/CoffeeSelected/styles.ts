import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;

  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  strong {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CoffeeSelectedImg = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
`

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    font-family: 'Roboto', cursive;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  .trash {
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    padding: 0.5rem;
    border: none;
    cursor: pointer;
    width: 6.6875rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    text-transform: uppercase;
  }
`

export const ActionsBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  width: 5.5rem;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`
