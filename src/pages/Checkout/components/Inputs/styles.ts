import styled from 'styled-components'

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;

  input {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    padding: 0.75rem;
    outline: none;

    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;

    &:focus-within {
      border: 1px solid ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-error']};
    margin-top: -0.5rem;
  }

  .cep,
  .number,
  .neighborhood {
    width: 12.5rem;
  }

  .complement {
    width: 100%;
  }

  .city {
    width: 16.6875rem;
  }

  .uf {
    width: 3.75rem;
  }

  div {
    display: flex;
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    div {
      flex-direction: column;
    }

    .cep,
    .number,
    .neighborhood,
    .city,
    .uf {
      width: 100%;
    }
  }

  .optional {
    position: relative;
    flex: 1;
  }

  strong {
    position: absolute;
    top: 1rem;
    right: 0.75rem;

    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.3;
    font-style: italic;
    color: ${(props) => props.theme['base-label']};
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
