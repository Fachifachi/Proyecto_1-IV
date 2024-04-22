import React, { useEffect, useState } from 'react';
import mSound from '../../../public/notes/MESSI/messi.mp3';

function Messi({ isMenuVisible }) {
  const [audio, setAudio] = useState(null);

  const playAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    } else {
      const newAudio = new Audio(mSound);
      setAudio(newAudio);
      newAudio.play();
    }
  };


  const isLessThan1400px = window.innerWidth < 1100;

  return (
    <div className=''>
      <div className='App' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {isLessThan1400px &&
          <button
            onClick={playAudio}
            className='bg-blue-500 hover:bg-blue-300 text-white font-bold rounded-full shadow-md transition duration-300 ease-in-out'
            style={{ width: '50px', height: '50px', margin: '5px' }}
          >
            10
          </button>
        }
      </div>
    </div>
  );
}

export default Messi;
