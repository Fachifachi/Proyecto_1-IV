import React, { useEffect, useState } from 'react';

import Yoshi_1 from '../../../public/notes/YOSHI/yoshi_1.mp3';
import Yoshi_2 from '../../../public/notes/YOSHI/yoshi_2.mp3';
import Yoshi_3 from '../../../public/notes/YOSHI/yoshi_3.mp3';
import Yoshi_4 from '../../../public/notes/YOSHI/yoshi_4.mp3';


function Yoshi() {
    const [currentSound, setCurrentSound] = useState(null);
  
    const yoshiNotes = [
      { key: 'z', label: 'Z', sound: Yoshi_1 },
      { key: 'x', label: 'X', sound: Yoshi_2 },
      { key: 'c', label: 'C', sound: Yoshi_3 },
      { key: 'v', label: 'V', sound: Yoshi_4 },
    ];
  
    
    const isLessThan1400px = window.innerWidth < 1100;
  
    return (
      <div className=''>
        <div className='App' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {isLessThan1400px && 
            yoshiNotes.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  if (currentSound) {
                    currentSound.pause();
                    currentSound.currentTime = 0;
                  }
                  const sound = new Audio(item.sound);
                  sound.play();
                  setCurrentSound(sound);
                }}
                className='bg-green-500 hover:bg-green-700 text-white font-bold rounded-full shadow-md transition duration-300 ease-in-out'
                style={{ width: '50px', height: '50px', margin: '5px' }}
              >
                {item.label}
              </button>
            ))}
        </div>
      </div>
    );
  }
  
  export default Yoshi;