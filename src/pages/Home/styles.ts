import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 10rem;
`

export const Main = styled.main`
  padding-bottom: 8.25rem;

  h2 {
    margin-top: 8.25rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 3.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContentTitle = styled.div`
  flex: 1;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;
    max-width: 36.75rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
    margin-bottom: 4.125rem;
    max-width: 36.75rem;
  }
`

export const ContentService = styled.div`
  max-width: 35.9375rem;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.25rem;
`

export const ContentImage = styled.div`
  img {
    width: 100%;
  }
`

export const ContainerCoffee = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
