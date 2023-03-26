import React from 'react'

import ReactPlayer from 'react-player';

//props.link
const VideoView = (props) => {

    console.log(props.link)
    return (
        <div className="video-container">
            <ReactPlayer
                url={props.link}
                controls={true}
                loop={true}
                muted={true}
                playsinline={true}
            />

        </div>
    )
}

export default VideoView