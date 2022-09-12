import React from 'react';
import ReactPlayer from 'react-player';
import Video from '../../videos/NewVideoWendy.MP4';
import { VideoContainer, VideoContainerBg } from '../VideoSection/VideoElements';


const VideoSection = () => {
  return (
    <>
    <VideoContainer>
        <VideoContainerBg>
            <ReactPlayer
            url={Video}
            classname='react-player'
            controls='true'
            width='100%'
            height='100%'
            />
        </VideoContainerBg>
    </VideoContainer>
    </>
  )
} 

export default VideoSection