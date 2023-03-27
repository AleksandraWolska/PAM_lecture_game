import React from 'react'

import ReactPlayer from 'react-player';

//props.link
const VideoView = (props) => {

    console.log(props.link)
    return (
        <div className="video-container-inner">
            <ReactPlayer
                url={props.link}
                controls={true}
                loop={true}
                muted={true}
                playsinline={true}
                height="700px"
                width="1200px"
            />
        </div>
    )
}

export default VideoView