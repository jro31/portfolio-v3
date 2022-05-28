import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import randomElement from 'random-element-selector';

import { homePortrait } from '../../../pages';

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

const Portrait = () => {
  const portraitHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[homePortrait]
  );
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
    <div className='flex lg:block justify-center lg:h-inherit'>
      <div className='relative lg:h-inherit max-w-[450px] lg:max-w-[770px] flex justify-center'>
        {/* <CSSTransition
          in={portraitHasBeenInView}
          timeout={4000}
          classNames={{ enterActive: 'animate-very-slow-fade-in' }}
        >
          <div
            className={`absolute h-full w-full bg-gradient-radial to-black before:transition-opacity before:duration-[5000ms] before:content-[''] before:absolute before:h-full before:w-full before:z-[5] before:bg-gradient-radial before:to-black ${currentBackgroundColorClasses} ${currentBackgroundBeforeColorClasses} ${backgroundBeforeOpacityClass()} ${
              portraitHasBeenInView ? 'block' : 'hidden'
            }`}
          />
        </CSSTransition> */}
        {/* <div className='absolute h-full w-full flex flex-col'>
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
        </div> */}
        {/* FIXME - Not urgent, but there's a slight 'jolt' on the image when loading the page at about 2 seconds */}
        <CSSTransition
          in={portraitHasBeenInView}
          timeout={2000}
          classNames={{ enterActive: 'animate-slow-fade-in' }}
        >
          <img
            src='/images/meals-of-change-2.gif'
            alt='Portrait'
            className={`h-3/4 w-3/4 object-contain relative ${
              portraitHasBeenInView ? 'hidden lg:block' : 'hidden'
            }`}
          />
        </CSSTransition>
      </div>
    </div>
  );
};

export default Portrait;
