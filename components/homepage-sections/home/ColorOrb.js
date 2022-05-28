import { useEffect, useRef, useState } from 'react';
import randomElement from 'random-element-selector';

const backgroundColorClasses = [
  'from-blue-500 via-blue-900',
  'from-violet-500 via-violet-900',
  'from-purple-500 via-purple-900',
  'from-indigo-500 via-indigo-900',
  'from-sky-500 via-sky-900',
  'from-yellow-500 via-yellow-900',
  'from-amber-500 via-amber-900',
  'from-orange-500 via-orange-900',
];

const backgroundBeforeColorClasses = [
  'before:from-green-500 before:via-green-900',
  'before:from-emerald-500 before:via-emerald-900',
  'before:from-rose-500 before:via-rose-900',
  'before:from-pink-500 before:via-pink-900',
  'before:from-fuchsia-500 before:via-fuchsia-900',
  'before:from-cyan-500 before:via-cyan-900',
  'before:from-teal-500 before:via-teal-900',
  'before:from-lime-500 before:via-lime-900',
  'before:from-red-500 before:via-red-900',
];

const ColorOrb = props => {
  const [currentBackgroundColorClasses, setCurrentBackgroundColorClasses] = useState(
    'from-blue-500 via-blue-900'
  );
  const [currentBackgroundBeforeColorClasses, setCurrentBackgroundBeforeColorClasses] = useState(
    'before:from-emerald-500 before:via-emerald-900'
  );
  const [backgroundBeforeIsTransparent, setBackgroundBeforeIsTransparent] = useState(true);
  const backgroundBeforeIsTransparentRef = useRef(backgroundBeforeIsTransparent);
  backgroundBeforeIsTransparentRef.current = backgroundBeforeIsTransparent;

  const backgroundBeforeOpacityClass = () =>
    backgroundBeforeIsTransparent ? 'before:opacity-0' : 'before:opacity-100';

  useEffect(() => {
    let timeout;

    const toggleBackground = () => {
      timeout = setTimeout(() => {
        backgroundBeforeIsTransparentRef.current
          ? setCurrentBackgroundBeforeColorClasses(randomElement(backgroundBeforeColorClasses))
          : setCurrentBackgroundColorClasses(randomElement(backgroundColorClasses));
        setBackgroundBeforeIsTransparent(prevState => !prevState);
        toggleBackground();
      }, 5000);
    };

    toggleBackground();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`${props.displayClasses || 'block'}`}>
      <div
        className={`block absolute h-full w-full bg-gradient-radial to-black before:transition-opacity before:duration-[5000ms] before:content-[''] before:absolute before:h-full before:w-full before:z-[5] before:bg-gradient-radial before:to-black ${currentBackgroundColorClasses} ${currentBackgroundBeforeColorClasses} ${backgroundBeforeOpacityClass()}`}
      />

      <div className='absolute h-full w-full flex flex-col z-10'>
        <div className='basis-1/3 grow-0 shrink-0 flex'>
          <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-tl from-transparent via-black to-black' />
          <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-t from-transparent to-black' />
          <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-tr from-transparent via-black to-black' />
        </div>
        <div className='basis-1/3 grow-0 shrink-0 flex'>
          <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-l from-transparent to-black' />
          <div className='basis-1/3 grow-0 shrink-0 bg-transparent' />
          <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-r from-transparent to-black' />
        </div>
        <div className='basis-1/3 grow-0 shrink-0 flex'>
          <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-bl from-transparent via-black to-black' />
          <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-b from-transparent to-black' />
          <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-br from-transparent via-black to-black' />
        </div>
      </div>
    </div>
  );
};

export default ColorOrb;
