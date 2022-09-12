import React from 'react';
import ReactPlayer from 'react-player';
import Video from '../../videos/NewVideoWendy.MP4';
import { VideoContainer, VideoContainerBg, PngVideoMask } from '../VideoSection/VideoElements';
import pngvideomask from '../../img/pngVideoMask.png';


const VideoSection = () => {
  return (
    <>
    <VideoContainer>
        <VideoContainerBg>
          <PngVideoMask>
            <ReactPlayer
            url={Video}
            classname='react-player'
            controls='true'
            />
            </PngVideoMask>
        </VideoContainerBg>
    </VideoContainer>
    </>
  )
} 

export default VideoSection