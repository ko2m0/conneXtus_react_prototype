import styled from 'styled-components'

export const VideoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 250px;
position: relative;
z-index: 1;
`
export const VideoContainerBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
export const VideoBg = styled.div`
width: 100%;
height: 100%;
object-fit: cover;
-o-object-fit: cover;
background: coral;
`
