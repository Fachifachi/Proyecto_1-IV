

import meow1 from '../../../public/notes/CATS/meow1.wav';
import meow2 from '../../../public/notes/CATS/meow2.wav';
import meow3 from '../../../public/notes/CATS/meow3.wav';
import meow4 from '../../../public/notes/CATS/meow4.wav';
import meow5 from '../../../public/notes/CATS/meow5.wav';
import meow6 from '../../../public/notes/CATS/meow6.wav';
import meow7 from '../../../public/notes/CATS/meow7.wav';
import meow8 from '../../../public/notes/CATS/meow8.wav';

function Cats() {
  const catsNotes = [
    { key: '1', label: '1', sound: meow1 },
    { key: '2', label: '2', sound: meow2 },
    { key: '3', label: '3', sound: meow3 },
    { key: '4', label: '4', sound: meow4 },
    { key: '5', label: '5', sound: meow5 },
    { key: '6', label: '6', sound: meow6 },
    { key: '7', label: '7', sound: meow7 },
    { key: '8', label: '8', sound: meow8 },
  ];

  const isLessThan1400px = window.innerWidth < 1100;
  return (
    <div className=''>
      <div className='App' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {isLessThan1400px && 
          catsNotes.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                const sound = new Audio(item.sound);
                sound.play();
              }}
              className='bg-red-500 hover:bg-red-700 text-white font-bold rounded-full shadow-md transition duration-300 ease-in-out'
              style={{ width: '50px', height: '50px', margin: '5px' }}
            >
              {item.label}
            </button>
          ))}
      </div>
    </div>
  );
}


export default Cats;
