import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
  }
  body {
    padding: 0;  
     margin: 0;
  }
  button{
    padding: 0;
    border: 0;
    outline: 0;   
    cursor: pointer;
  }
  input {
    border: none;
    outline: none;
  }

`;
