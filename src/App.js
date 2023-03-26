import logo from './logo.svg';
import './App.css';
import Lecture from './Lecture';

import { questions } from './questions';
import { useState } from 'react';


//dodac nawigowanie po wykladach, przechodzenie miedzy wykładami, otwieranie testu z wykładu, przejscie z prezentacji wyniku do wykładu
import video1 from './videos/video1.mp4'
import video2 from './videos/video2.mp4'
import video3 from './videos/video3.mp4'

function App() {
  const [current, useCurrent] = useState(0);
  const videos = [video1, video2, video3]
  return (
    <div className="App">

      <Lecture link={videos[current]} test={questions[current]}/>
    </div>
  );
}

export default App;
