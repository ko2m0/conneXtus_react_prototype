import React from 'react';
import video from '../../videos/video.mp4';
import { VideoContainer, VideoContainerBg, VideoBg } from './VideoElements';
import pngvideomask from '../../img/pngVideoMask.png';

const VideoSection = () => {
  return (
    <>
    <VideoContainer>
        <VideoContainerBg>
          <img src={pngvideomask} alt="mask here" className='png-video-mask'/>
            <VideoBg autoplay loop muted src={video} type='video/mp4'/>
        </VideoContainerBg>
    </VideoContainer>
    </>
  )
} 

export default VideoSection