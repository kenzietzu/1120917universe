import { createGlobalStyle } from "styled-components";
import Glusp from "./assets/OTF-Glusp.woff";

const GlobalStyles = createGlobalStyle`

/* @font-face {
    font-family: Glusp;
    src: url(${Glusp}) format('woff');
} */


*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --color-light: #fff8df;
    --color-dark: #333333;
}

html {
font-size: 62.5%;     //define 1rem = 10px
}

body{
    font-family: 'Kanit', sans-serif;
    overflow-x: hidden;
    background-color: var(--color-dark);
    color: var(--color-light);
		overscroll-behavior: none;
}

h1,h2,h3,h4,h5,h6{
    font-family: 'Kanit', sans-serif;
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}

`;

export default GlobalStyles;
