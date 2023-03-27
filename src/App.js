import logo from './logo.svg';
import './App.css';
import Lecture from './Lecture';

import { questions } from './questions';
import { useState } from 'react';


//dodac nawigowanie po wykladach, przechodzenie miedzy wykładami, otwieranie testu z wykładu, przejscie z prezentacji wyniku do wykładu
import video1 from './videos/video1.mp4'
import video2 from './videos/video2.mp4'
import video3 from './videos/video3.mp4'
import photo1 from './photos/photo1.png'
import photo2 from './photos/photo2.png'
import photo3 from './photos/photo3.png'

function App() {
  const [current, setCurrent] = useState(-1);
  const videos = [video1, video2, video3]
  return (
    <div className="App">
      <div className='app-container'>





        {current == -1 ?
          <>
            <h1>React - wykłady</h1>

            <div className="photo" onClick={() => setCurrent(0)}>
              <h2>Reusable components</h2>
              <img src={photo1} alt="Photo 1" />
            </div>
            <div className="photo" onClick={() => setCurrent(1)}>
              <h2>Functions as props</h2>
              <img src={photo2} alt="Photo 2" />
            </div>
            <div className="photo" onClick={() => setCurrent(2)}>
              <h2>Hook useEffect()</h2>
              <img src={photo3} alt="Photo 3" />
            </div>
          </>
          :
          <Lecture link={videos[current]} test={questions[current]} />

        }
      </div>
      <div className='navigation'>
        <div className="nav back" onClick={() => setCurrent(-1)}>Start</div>
        <div className="nav" onClick={() => setCurrent(0)}>Wykład 1</div>
        <div className="nav" onClick={() => setCurrent(1)}>Wykład 2</div>
        <div className="nav" onClick={() => setCurrent(2)}>Wykład 3</div>

      </div>





    </div>
  );
}

export default App;
