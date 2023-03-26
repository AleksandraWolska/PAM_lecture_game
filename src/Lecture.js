import React, { useState } from 'react'
import Start from './Start'
import TestView from './TestView'
import VideoView from './VideoView'


//props:
//videoLink
//questiosArray


const Lecture = (props) => {

const [view, setView] =  useState("video")

console.log()


if (view === 'video') {
    return <VideoView link={props.link}/>
} else if (view === "test") {
    return <TestView/>
} else return <Start/>

}

export default Lecture