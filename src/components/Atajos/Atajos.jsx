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
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = {
      pianoDo: new Audio(pianoDo),
      pianoRe: new Audio(pianoRe),
      pianoMi: new Audio(pianoMi),
      pianoFa: new Audio(pianoFa),
      pianoSol: new Audio(pianoSol),
      pianoLa: new Audio(pianoLa),
      pianoSi: new Audio(pianoSi),
      pianoC3: new Audio(pianoC3),
      bellDo: new Audio(bellDo),
      bellRe: new Audio(bellRe),
      bellMi: new Audio(bellMi),
      bellFa: new Audio(bellFa),
      bellSol: new Audio(bellSol),
      bellLa: new Audio(bellLa),
      bellSi: new Audio(bellSi),
      bellDoM: new Audio(bellDoM),
      meow1: new Audio(meow1),
      meow2: new Audio(meow2),
      meow3: new Audio(meow3),
      meow4: new Audio(meow4),
      meow5: new Audio(meow5),
      meow6: new Audio(meow6),
      meow7: new Audio(meow7),
      meow8: new Audio(meow8),
      yoshi1: new Audio(Yoshi_1),
      yoshi2: new Audio(Yoshi_2),
      yoshi3: new Audio(Yoshi_3),
      yoshi4: new Audio(Yoshi_4),
      messi: new Audio(Messi),
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const notas = {
        q: 'pianoDo',
        w: 'pianoRe',
        e: 'pianoMi',
        r: 'pianoFa',
        t: 'pianoSol',
        y: 'pianoLa',
        u: 'pianoSi',
        i: 'pianoC3',
        a: 'bellDo',
        s: 'bellRe',
        d: 'bellMi',
        f: 'bellFa',
        g: 'bellSol',
        h: 'bellLa',
        j: 'bellSi',
        k: 'bellDoM',
        1: 'meow1',
        2: 'meow2',
        3: 'meow3',
        4: 'meow4',
        5: 'meow5',
        6: 'meow6',
        7: 'meow7',
        8: 'meow8',
        z: 'yoshi1',
        x: 'yoshi2',
        c: 'yoshi3',
        v: 'yoshi4',
        m: 'messi',
      };
      const nota = notas[key];
      if (nota) {
        const audio = audioRef.current[nota];
        audio.currentTime = 0;
        audio.play();
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
