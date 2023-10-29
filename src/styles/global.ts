import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;

  background-color: ${(props) => props.theme.background};
 }

@media(max-width: 768px) {
  html {
  font-size: 80%;
 }
}
`
