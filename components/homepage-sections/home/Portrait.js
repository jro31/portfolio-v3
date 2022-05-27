import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { homePortrait } from '../../../pages';

const Portrait = () => {
  const portraitHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[homePortrait]
  );
  const [backgroundBeforeIsTransparent, setBackgroundBeforeIsTransparent] = useState(true);

  const backgroundColorClasses = () => {
    return 'from-blue-500 via-blue-900';
  };

  const backgroundBeforeColorClasses = () => {
    return 'before:from-green-500 before:via-green-900';
  };

  const backgroundBeforeOpacityClass = () =>
    backgroundBeforeIsTransparent ? 'before:opacity-0' : 'before:opacity-100';

  useEffect(() => {
    let timeout;

    const toggleBackground = () => {
      timeout = setTimeout(() => {
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
      <div className='relative lg:h-inherit max-w-[450px] lg:max-w-[770px]'>
        <CSSTransition
          in={portraitHasBeenInView}
          timeout={4000}
          classNames={{ enterActive: 'animate-very-slow-fade-in' }}
        >
          <div
            className={`absolute h-full w-full bg-gradient-radial to-black before:transition-opacity before:duration-[5000ms] before:content-[''] before:absolute before:h-full before:w-full before:z-[5] before:bg-gradient-radial before:to-black ${backgroundColorClasses()} ${backgroundBeforeColorClasses()} ${backgroundBeforeOpacityClass()} ${
              portraitHasBeenInView ? 'block' : 'hidden'
            }`}
          />
        </CSSTransition>
        <div className='absolute h-full w-full flex flex-col'>
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
        {/* FIXME - Not urgent, but there's a slight 'jolt' on the image when loading the page at about 2 seconds */}
        <CSSTransition
          in={portraitHasBeenInView}
          timeout={2000}
          classNames={{ enterActive: 'animate-slow-fade-in' }}
        >
          <img
            src='/images/self-portrait.png'
            alt='Portrait'
            className={`h-full w-full object-contain relative z-10 ${
              portraitHasBeenInView ? 'block' : 'hidden'
            }`}
          />
        </CSSTransition>
      </div>
    </div>
  );
};

export default Portrait;
