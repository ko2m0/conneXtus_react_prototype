import styled from "styled-components";

export const Container = styled.div`
width: 99%;
max-width: 1000px;
height: 100vh;
margin: 0 auto;
display: grid;
grid-gap: 0;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(4, auto);
`
export const Header = styled.header`
background: blue;
color: #fff;
min-height: 100px;
max-height: 200px;
grid-area: header;
`

export const Main = styled.main`
padding-left: 2%;
grid-area: contenido;
`

export const Sidebar = styled.aside`
background: orange;
min-height: 100px;
grid-area: sidebar; 

display: flex;
align-items: center;
justify-content: center; 
`

export const Widget = styled.div`
background: orchid;
min-height: 100px;
grid-area: widget-1
}; 

display: flex;
align-items: center;
justify-content: center;
`
export const Widget2 = styled.div`
background: orchid;
min-height: 100px;
grid-area: widget-2;
}; 

display: flex;
align-items: center;
justify-content: center;
`

export const Widget3 = styled.div`
background: orchid;
min-height: 100px;
grid-area: widget-3;
}; 

display: flex;
align-items: center;
justify-content: center;
`

export const Footer = styled.footer`
padding: 20px;
background: maroon;
color: #fff;
grid-area: footer;
`