import styled from 'styled-components'

export const VideoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 350px;
position: relative;
z-index: 0;
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
`
export const PngVideoMask = styled.div`
mask-image: radial-gradient(ellipse, black 60%, rgba(0, 0, 0, 0.8));;
-webkit-mask-image: radial-gradient(ellipse, black 70%, rgba(0, 0, 0, 0.8));;
-webkit-mask-repeat: no-repeat;
mask-repeat: no-repeat;
`