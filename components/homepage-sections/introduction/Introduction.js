import { useSelector } from 'react-redux';

import Title from '../../ui/text/Title';
import SectionContainer from '../SectionContainer';
import {
  introductionDescription,
  introductionFindOutMoreDesktopLink,
  introductionFindOutMoreMobileLink,
  introductionPortrait,
  introductionSection,
  introductionTitle,
} from '../../../pages';
import Portrait from './Portrait';
import FindOutMoreLink from './FindOutMoreLink';
import Description from '../../ui/text/Description';
import useElementRef from '../../../hooks/useElementRef';
import { CSSTransition } from 'react-transition-group';

const Introduction = () => {
  const titleHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[introductionTitle]
  );
  const descriptionHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[introductionDescription]
  );
  const mobileFindOutMoreLinkHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[introductionFindOutMoreMobileLink]
  );
  const desktopFindOutMoreLinkHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[introductionFindOutMoreDesktopLink]
  );
  const elementRef = useElementRef();

  return (
    <SectionContainer section={introductionSection} className='bg-black'>
      <div className='flex flex-col lg:flex-row w-full lg:h-full'>
        <div className='flex justify-center lg:justify-end lg:basis-1/2'>
          <div className='flex flex-col justify-around lg:basis-10/12'>
            <div className='flex flex-col gap-16'>
              <div ref={elementRef(introductionTitle)} className='flex flex-col lg:gap-2'>
                <CSSTransition
                  mountOnEnter
                  in={titleHasBeenInView}
                  timeout={2000}
                  classNames={{ enterActive: 'animate-zoom-down-in' }}
                >
                  <div>
                    <Title className='text-white'>Jethro Williams</Title>
                    <Title className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500'>
                      Software Engineer
                    </Title>
                  </div>
                </CSSTransition>
              </div>
              <div ref={elementRef(introductionDescription)} className='hidden lg:flex'>
                <CSSTransition
                  mountOnEnter
                  in={descriptionHasBeenInView}
                  timeout={2000}
                  classNames={{ enterActive: 'animate-slide-fade-up-delayed' }}
                >
                  <Description uppercase className='basis-2/3'>
                    {/* TODO - Update this text */}
                    This is some really inspirational text about some thing or whatever.
                  </Description>
                </CSSTransition>
              </div>
            </div>
            <div ref={elementRef(introductionFindOutMoreDesktopLink)}>
              <CSSTransition
                mountOnEnter
                in={desktopFindOutMoreLinkHasBeenInView}
                timeout={2000}
                classNames={{ enterActive: 'animate-slow-fade-in' }}
              >
                <FindOutMoreLink className='hidden lg:block' />
              </CSSTransition>
            </div>
          </div>
        </div>
        <div ref={elementRef(introductionPortrait)} className='lg:basis-1/2 lg:h-inherit'>
          <Portrait />
        </div>
        <div
          ref={elementRef(introductionFindOutMoreMobileLink)}
          className='flex justify-center my-5'
        >
          <CSSTransition
            mountOnEnter
            in={mobileFindOutMoreLinkHasBeenInView}
            timeout={2000}
            classNames={{ enterActive: 'animate-slow-fade-in' }}
          >
            <FindOutMoreLink className='lg:hidden' />
          </CSSTransition>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Introduction;
