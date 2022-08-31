import React from 'react';
import ReactPlayer from 'react-player';
import Video from '../../videos/wendy_4color.MP4';
import { VideoContainer, VideoContainerBg, VideoBg } from '../VideoSection/VideoElements';


const VideoSection = () => {
  return (
    <>
    <VideoContainer>
        <VideoContainerBg>
            <ReactPlayer
            url={Video}
            controls='true'
            width='100%'
            height="100%"
            />
        </VideoContainerBg>
    </VideoContainer>
    </>
  )
} 

export default VideoSection