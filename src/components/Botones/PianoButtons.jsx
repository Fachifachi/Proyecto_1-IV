import React, { useEffect } from 'react';

import pianoDo from '../../../public/notes/PIANO/Piano_do.wav';
import pianoRe from '../../../public/notes/PIANO/Piano_re.wav';
import pianoMi from '../../../public/notes/PIANO/Piano_mi.wav';
import pianoFa from '../../../public/notes/PIANO/Piano_fa.wav';
import pianoSol from '../../../public/notes/PIANO/Piano_sol.wav';
import pianoLa from '../../../public/notes/PIANO/Piano_la.wav';
import pianoSi from '../../../public/notes/PIANO/Piano_si.wav';
import pianoC3 from '../../../public/notes/PIANO/Piano_c3.wav';

function Piano() {
  const pianoNotes = [
    { key: 'q', label: 'Q', sound: pianoDo },
    { key: 'w', label: 'W', sound: pianoRe },
    { key: 'e', label: 'E', sound: pianoMi },
    { key: 'r', label: 'R', sound: pianoFa },
    { key: 't', label: 'T', sound: pianoSol },
    { key: 'y', label: 'Y', sound: pianoLa },
    { key: 'u', label: 'U', sound: pianoSi },
    { key: 'i', label: 'I', sound: pianoC3 },
  ];

 
  const isLessThan1400px = window.innerWidth < 1100;

 
  return (
    <div className=''>
      <div className='App' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {isLessThan1400px && 
          pianoNotes.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                const sound = new Audio(item.sound);
                sound.play();
              }}
              className='bg-black hover:bg-gray-800 text-white font-bold rounded-full shadow-md transition duration-300 ease-in-out'
              style={{ width: '50px', height: '50px', margin: '5px' }}
            >
              {item.label}
            </button>
          ))}
      </div>
    </div>
  );
}
export default Piano;