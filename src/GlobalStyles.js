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
    min-width: 430px;
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

.lenis {
	overflow-y: auto;
}

//捲軸底色
.lenis::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--color-dark);
  box-shadow: none;
}
//捲軸寬度
.lenis::-webkit-scrollbar {
  width: 6px;
}
//捲軸本體顏色
.lenis::-webkit-scrollbar-thumb {
  background-color: var(--color-light);
}

Canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

`;

export default GlobalStyles;
