import React, { useState } from 'react'
import Start from './Start'
import TestView from './TestView'
import VideoView from './VideoView'


//props:
//videoLink
//questiosArray


const Lecture = (props) => {

    const [view, setView] = useState("video")

    console.log()


    if (view === 'video') {
        return <div className='video-container'>
            <VideoView link={props.link} />
            <div className='button-main' onClick={() => setView("test")}>TEST</div>
        </div>
    } else if (view === "test") {
        return <div className='outer-test-container'>
            <TestView questions={props.test} />
            <div className='button-main' onClick={() => setView("video")}>WYKŁAD</div>
        </div>
    }

}

export default Lecture