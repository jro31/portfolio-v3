import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { homePortrait } from '../../../pages';

const Portrait = () => {
  const portraitHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[homePortrait]
  );

  return (
    <div className='flex lg:block justify-center lg:h-inherit'>
      <div className='relative lg:h-inherit max-w-[450px] lg:max-w-[770px]'>
        {/* TODO - Is it possible to gradually change these colors? */}
        <CSSTransition
          mountOnEnter
          in={portraitHasBeenInView}
          timeout={4000}
          classNames={{ enterActive: 'animate-very-slow-fade-in' }}
        >
          <div className='absolute h-full w-full bg-gradient-radial from-blue-500 via-blue-900 to-black' />
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
        <CSSTransition
          mountOnEnter
          in={portraitHasBeenInView}
          timeout={2000}
          classNames={{ enterActive: 'animate-slow-fade-in' }}
        >
          <img
            src='/images/self-portrait.png'
            alt='Portrait'
            className='h-full w-full object-contain relative z-10'
          />
        </CSSTransition>
      </div>
    </div>
  );
};

export default Portrait;
