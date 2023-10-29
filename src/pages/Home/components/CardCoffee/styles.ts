import styled from 'styled-components'

export const ContainerCardCoffee = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4rem;

  h4 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    line-height: 1.3;
    text-align: center;
    margin-bottom: 2rem;
    max-width: 23.75rem;

    flex: 1;
  }
`

export const ContentActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
  }

  strong span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
  }
`

export const ButtonsActions = styled.div`
  display: flex;

  background: ${(props) => props.theme['base-button']};
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;

  span {
    width: 2.375rem;
    border: none;
    text-align: center;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`

export const BtnCart = styled.button`
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-dark']};
  border: none;
  cursor: pointer;
`

export const ImageCoffee = styled.img`
  width: 7.5rem;

  margin-top: -4rem;
`

export const Title = styled.h3`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 1rem;
`
