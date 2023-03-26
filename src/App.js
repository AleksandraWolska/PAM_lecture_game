import logo from './logo.svg';
import './App.css';
import Lecture from './Lecture';

import { questions } from './questions';
import { useState } from 'react';

import video1 from './videos/video1.mp4'
import video2 from './videos/video2.mp4'
import video3 from './videos/video3.mp4'





function App() {

  const [current, useCurrent] = useState(0);

  const videos = [video1, video2, video3]
  return (
    <div className="App">
{/* 
<video>
    <source src="/videos/video1.mp4" type="video/mp4" />
    Sorry, your browser doesn't support videos.
</video> */}
      <Lecture link={videos[current]} test={questions[current]}/>
    </div>
  );
}

export default App;
