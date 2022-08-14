import React from 'react';
import video from '../../videos/video.mp4';
import { VideoContainer, VideoContainerBg, VideoBg } from './VideoElements';


const VideoSection = () => {
  return (
    <>
    <VideoContainer>
        <VideoContainerBg>
            <VideoBg autoplay loop muted src={video} type='video/mp4'/>
        </VideoContainerBg>
    </VideoContainer>
    </>
  )
}

export default VideoSection