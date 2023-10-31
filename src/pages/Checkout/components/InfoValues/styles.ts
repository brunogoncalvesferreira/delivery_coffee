import styled from 'styled-components'

export const Container = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1rem;
  }

  div h3 {
    font-family: 'Robooto', sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    font-weight: 400;
  }

  div strong {
    font-family: 'Robooto', sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    font-weight: 400;
  }

  .total {
    h3,
    strong {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  input {
    width: 100%;
    background: ${(props) => props.theme.yellow};
    border: none;
    border-radius: 6px;
    padding: 1rem 0.5rem;

    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
  }
`
