import styled from 'styled-components'

export const VideoContainer = styled.div`
height: 180px;
position: relative;
z-index: 0;
grid-area: video;
`
export const VideoContainerBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
overflow: hidden;
`
export const VideoBg = styled.div`
object-fit: cover;
-o-object-fit: cover;
`

