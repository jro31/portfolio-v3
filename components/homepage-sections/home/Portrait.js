import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { homePortrait } from '../../../pages';

const Portrait = () => {
  const portraitHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[homePortrait]
  );

  return (
    <div className='flex lg:block justify-center lg:h-inherit'>
      <div className='relative lg:h-inherit max-w-[450px] lg:max-w-[770px] flex justify-center'>
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
