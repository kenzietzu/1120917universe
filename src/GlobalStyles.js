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

.style {
	overflow-y: auto;
}

//捲軸底色
.style::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: red;
}
//捲軸寬度
.style::-webkit-scrollbar {
  width: 6px;
  background-color: red;
}
//捲軸本體顏色
.style::-webkit-scrollbar-thumb {
  background-color: red;
}

`;

export default GlobalStyles;
