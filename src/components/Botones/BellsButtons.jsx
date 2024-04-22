import React, { useEffect } from 'react';

import bellDo from '../../../public/notes/BELLS/bell_do.mp3';
import bellRe from '../../../public/notes/BELLS/bell_re.mp3';
import bellMi from '../../../public/notes/BELLS/bell_mi.mp3';
import bellFa from '../../../public/notes/BELLS/bell_fa.mp3';
import bellSol from '../../../public/notes/BELLS/bell_sol.mp3';
import bellLa from '../../../public/notes/BELLS/bell_la.mp3';
import bellSi from '../../../public/notes/BELLS/bell_si.mp3';
import bellDoM from '../../../public/notes/BELLS/bell_doM.mp3';

function Bells() {
  const bellNotes = [
    { key: 'a', label: 'A', sound: bellDo },
    { key: 's', label: 'S', sound: bellRe },
    { key: 'd', label: 'D', sound: bellMi },
    { key: 'f', label: 'F', sound: bellFa },
    { key: 'g', label: 'G', sound: bellSol },
    { key: 'h', label: 'H', sound: bellLa },
    { key: 'j', label: 'J', sound: bellSi },
    { key: 'k', label: 'K', sound: bellDoM },
  ];

  
  const isLessThan1400px = window.innerWidth < 1100;

  return (
    <div className=''>
      <div className='App flex items-center justify-center' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {isLessThan1400px && 
          bellNotes.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                const sound = new Audio(item.sound);
                sound.play();
              }}
              className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out'
              style={{ width: '50px', height: '50px', margin: '5px' }}
            >
              <span className="text-center">{item.label}</span>
            </button>
          ))}
      </div>
    </div>
  );
}

export default Bells;
