import React, { useEffect, useRef } from 'react';

import pianoDo from '../../../public/notes/PIANO/Piano_do.wav';
import pianoRe from '../../../public/notes/PIANO/Piano_re.wav';
import pianoMi from '../../../public/notes/PIANO/Piano_mi.wav';
import pianoFa from '../../../public/notes/PIANO/Piano_fa.wav';
import pianoSol from '../../../public/notes/PIANO/Piano_sol.wav';
import pianoLa from '../../../public/notes/PIANO/Piano_la.wav';
import pianoSi from '../../../public/notes/PIANO/Piano_si.wav';
import pianoC3 from '../../../public/notes/PIANO/Piano_c3.wav';

import bellDo from '../../../public/notes/BELLS/bell_do.mp3';
import bellRe from '../../../public/notes/BELLS/bell_re.mp3';
import bellMi from '../../../public/notes/BELLS/bell_mi.mp3';
import bellFa from '../../../public/notes/BELLS/bell_fa.mp3';
import bellSol from '../../../public/notes/BELLS/bell_sol.mp3';
import bellLa from '../../../public/notes/BELLS/bell_la.mp3';
import bellSi from '../../../public/notes/BELLS/bell_si.mp3';
import bellDoM from '../../../public/notes/BELLS/bell_doM.mp3';

import meow1 from '../../../public/notes/CATS/meow1.wav';
import meow2 from '../../../public/notes/CATS/meow2.wav';
import meow3 from '../../../public/notes/CATS/meow3.wav';
import meow4 from '../../../public/notes/CATS/meow4.wav';
import meow5 from '../../../public/notes/CATS/meow5.wav';
import meow6 from '../../../public/notes/CATS/meow6.wav';
import meow7 from '../../../public/notes/CATS/meow7.wav';
import meow8 from '../../../public/notes/CATS/meow8.wav';

import Yoshi_1 from '../../../public/notes/YOSHI/yoshi_1.mp3';
import Yoshi_2 from '../../../public/notes/YOSHI/yoshi_2.mp3';
import Yoshi_3 from '../../../public/notes/YOSHI/yoshi_3.mp3';
import Yoshi_4 from '../../../public/notes/YOSHI/yoshi_4.mp3';

import Messi from '../../../public/notes/MESSI/messi.mp3';

function Atajos() {
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const notas = [
        { key: 'q', label: 'Do', sound: pianoDo },
        { key: 'w', label: 'Re', sound: pianoRe },
        { key: 'e', label: 'Mi', sound: pianoMi },
        { key: 'r', label: 'Fa', sound: pianoFa },
        { key: 't', label: 'Sol', sound: pianoSol },
        { key: 'y', label: 'La', sound: pianoLa },
        { key: 'u', label: 'Si', sound: pianoSi },
        { key: 'i', label: 'Do', sound: pianoC3 },
        { key: 'a', label: 'Do', sound: bellDo },
        { key: 's', label: 'Re', sound: bellRe },
        { key: 'd', label: 'Mi', sound: bellMi },
        { key: 'f', label: 'Fa', sound: bellFa },
        { key: 'g', label: 'Sol', sound: bellSol },
        { key: 'h', label: 'La', sound: bellLa },
        { key: 'j', label: 'Si', sound: bellSi },
        { key: 'k', label: 'Do', sound: bellDoM },
        { key: '1', label: 'Do', sound: meow1 },
        { key: '2', label: 'Re', sound: meow2 },
        { key: '3', label: 'Mi', sound: meow3 },
        { key: '4', label: 'Fa', sound: meow4 },
        { key: '5', label: 'Sol', sound: meow5 },
        { key: '6', label: 'La', sound: meow6 },
        { key: '7', label: 'Si', sound: meow7 },
        { key: '8', label: 'Do', sound: meow8 },
        { key: 'z', label: '1', sound: Yoshi_1 },
        { key: 'x', label: '2', sound: Yoshi_2 },
        { key: 'c', label: '3', sound: Yoshi_3 },
        { key: 'v', label: '4', sound: Yoshi_4 },
        { key: 'm', label: '10', sound: Messi },
      ];
      const nota = notas.find((item) => item.key === key);
      if (nota) {
        audioRef.current.src = nota.sound;
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}

export default Atajos;
