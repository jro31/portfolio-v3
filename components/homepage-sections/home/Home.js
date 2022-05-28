import { useSelector } from 'react-redux';

import Title from '../../ui/text/Title';
import SectionContainer from '../SectionContainer';
import {
  homeDescription,
  homeFindOutMoreDesktopLink,
  homeFindOutMoreMobileLink,
  homeImage,
  homeSection,
  homeTitle,
} from '../../../pages';
import FindOutMoreLink from './FindOutMoreLink';
import Description from '../../ui/text/Description';
import useElementRef from '../../../hooks/useElementRef';
import { CSSTransition } from 'react-transition-group';
import ColorOrb from './colorOrb';
import FadeCircle from './FadeCircle';

const Home = () => {
  const titleHasBeenInView = useSelector(state => state.elementIsInView.hasBeenInView[homeTitle]);
  const descriptionHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[homeDescription]
  );
  const mobileFindOutMoreLinkHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[homeFindOutMoreMobileLink]
  );
  const desktopFindOutMoreLinkHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[homeFindOutMoreDesktopLink]
  );
  const imageHasBeenInView = useSelector(state => state.elementIsInView.hasBeenInView[homeImage]);
  const elementRef = useElementRef();

  return (
    <SectionContainer section={homeSection} className='bg-black'>
      <div className='flex flex-1 flex-col justify-between lg:flex-row lg:justify-start w-full lg:h-full relative'>
        <div className='flex justify-center lg:justify-end lg:basis-1/2 relative'>
          <div className='flex flex-col justify-around lg:basis-10/12 z-20'>
            <div className='flex flex-col gap-16'>
              <div ref={elementRef(homeTitle)} className='flex flex-col lg:gap-2'>
                <CSSTransition
                  in={titleHasBeenInView}
                  timeout={2000}
                  classNames={{ enterActive: 'animate-zoom-down-in' }}
                >
                  <div
                    className={`text-center lg:text-left ${
                      titleHasBeenInView ? 'block' : 'hidden'
                    }`}
                  >
                    <Title className='text-white'>Jethro Williams</Title>
                    <Title className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 pb-1.5'>
                      Web Development Services
                    </Title>
                  </div>
                </CSSTransition>
              </div>
              <div ref={elementRef(homeDescription)} className='hidden lg:flex'>
                <CSSTransition
                  in={descriptionHasBeenInView}
                  timeout={2000}
                  classNames={{ enterActive: 'animate-slide-fade-up-delayed' }}
                >
                  <Description
                    uppercase
                    className={`text-white basis-2/3 italic ${
                      descriptionHasBeenInView ? 'block' : 'hidden'
                    }`}
                  >
                    Anyone can write code that computers understand. Good programmers write code
                    that humans can understand.
                  </Description>
                </CSSTransition>
              </div>
            </div>
            <div ref={elementRef(homeFindOutMoreDesktopLink)}>
              <CSSTransition
                in={desktopFindOutMoreLinkHasBeenInView}
                timeout={2000}
                classNames={{ enterActive: 'animate-slow-fade-in' }}
              >
                <FindOutMoreLink
                  className={desktopFindOutMoreLinkHasBeenInView ? 'hidden lg:block' : 'hidden'}
                />
              </CSSTransition>
            </div>
          </div>

          <CSSTransition
            in={descriptionHasBeenInView}
            timeout={2500}
            classNames={{ enterActive: 'animate-delated-slow-fade-in' }}
          >
            <ColorOrb displayClasses='hidden lg:block' in={descriptionHasBeenInView} />
          </CSSTransition>
        </div>
        <div
          ref={elementRef(homeImage)}
          className='flex flex-col justify-center items-center lg:basis-1/2 z-10 relative'
        >
          <FadeCircle />
          <CSSTransition
            in={imageHasBeenInView}
            timeout={2000}
            classNames={{ enterActive: 'animate-slow-fade-in' }}
          >
            <img
              src='/images/half-mac.jpg'
              alt='Half mac'
              className={`h-full w-full object-cover ${imageHasBeenInView ? 'block' : 'hidden'}`}
            />
          </CSSTransition>
        </div>
        <div ref={elementRef(homeFindOutMoreMobileLink)} className='flex justify-center my-5 z-20'>
          <CSSTransition
            in={mobileFindOutMoreLinkHasBeenInView}
            timeout={2000}
            classNames={{ enterActive: 'animate-slow-fade-in' }}
          >
            <FindOutMoreLink
              className={mobileFindOutMoreLinkHasBeenInView ? 'lg:hidden' : 'hidden'}
            />
          </CSSTransition>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Home;
