import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  position: fixed;
  top: 0;
  width: 100%;

  max-width: 70rem;
  width: 90%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.background};

  z-index: 10;

  nav {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
  }

  nav div {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['purple-light']};
  }

  nav div strong {
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 18.2px;
    color: ${(props) => props.theme['purple-dark']};
  }

  nav div svg {
    color: ${(props) => props.theme.purple};
  }

  nav a {
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme['yellow-dark']};
    margin: -0.5rem -0.5rem 0 0;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    line-height: 130%;
    letter-spacing: -0.72px;
    display: grid;
    place-content: center;
  }
`
