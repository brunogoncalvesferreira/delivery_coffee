import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 10rem;

  padding-bottom: 8.25rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 1.3;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
  }
`

export const WrapperContent = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  flex: 1;

  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme['base-yellow']};
  border-radius: 6px 36px;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
      line-height: 1.3;
    }

    b {
      margin-right: 0.5rem;
    }
  }

  .delivery {
    max-width: 30rem;
  }

  .time {
    max-width: 12rem;
  }

  .payment {
    max-width: 15rem;
  }
`

export const ContentImage = styled.div`
  img {
    width: 100%;
  }
`
