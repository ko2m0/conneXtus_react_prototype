import styled from 'styled-components';

export const SectionContainer = styled.div`
position: relative;
padding: 10px;
width:100%;
grid-area: btns;
`

export const BtnsSectionContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
`

export const Button = styled.div`
min-width: 90px;
padding: 16px 32px;
border-radius: 10px;
border: none;
background: #014479;
color: #ffffff;
font-size: 24px;
cursor:pointer;
text-align: center;
display: flex;
align-items: center;
justify-content:center;

@media screen and (max-width: 480px) {
    font-size: 12px;
}


@media screen and (max-device-width: 480px)
and (orientation: portrait) {
    padding: 16px 32px;
    font-size: 12px;

}



`