import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { pricingCards, pricingSection, pricingTitle } from '../../../pages';
import Title from '../../ui/text/Title';
import SectionContainer from '../SectionContainer';
import useElementRef from '../../../hooks/useElementRef';
import PricingCard from './PricingCard';
import { isMobile } from 'react-device-detect';
import Pointer, { left, right } from '../../ui/navigation/Pointer';

export const consultation = 'consultation';
export const featureBuilding = 'feature-building';
export const fullStackApplication = 'full-stack-application';
export const hosting = 'hosting';
export const website = 'website';
const pricingCardsOrder = [consultation, website, fullStackApplication, hosting, featureBuilding];

const Pricing = () => {
  const titleHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[pricingTitle]
  );
  const pricingCardsHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[pricingCards]
  );
  const [isHovering, setIsHovering] = useState(false);
  const pricingCardsContainerRef = useRef();
  const elementRef = useElementRef();

  const scrollLeftHandler = () => {
    pricingCardsContainerRef.current.scrollLeft =
      pricingCardsContainerRef.current.scrollLeft - window.innerWidth * 0.7;
  };

  const scrollRightHandler = () => {
    pricingCardsContainerRef.current.scrollLeft =
      pricingCardsContainerRef.current.scrollLeft + window.innerWidth * 0.7;
  };

  const onHover = () => {
    if (!isMobile) {
      setIsHovering(true);
    }
  };

  const onLeaveHover = () => {
    if (!isMobile) {
      setIsHovering(false);
    }
  };

  return (
    <SectionContainer section={pricingSection} className='bg-white'>
      <div className='flex flex-col justify-around min-h-screen lg:min-h-0 w-full h-full gap-5'>
        <div className='flex w-full justify-end basis-1/12 shrink-0 lg:mt-4'>
          <div ref={elementRef(pricingTitle)} className='basis-11/12'>
            <CSSTransition
              in={titleHasBeenInView}
              timeout={2000}
              classNames={{ enterActive: 'animate-slow-fade-in' }}
            >
              <Title className={titleHasBeenInView ? 'block' : 'hidden'}>Pricing</Title>
            </CSSTransition>
          </div>
        </div>
        <div
          ref={elementRef(pricingCards)}
          onMouseEnter={onHover}
          onMouseLeave={onLeaveHover}
          className='flex basis-11/12 min-h-[80vh] lg:min-h-0 relative'
        >
          <Pointer
            direction={left}
            in={isHovering}
            onClick={scrollLeftHandler}
            section={pricingSection}
          />
          <Pointer
            direction={right}
            in={isHovering}
            onClick={scrollRightHandler}
            section={pricingSection}
          />
          <CSSTransition
            in={pricingCardsHasBeenInView}
            timeout={1500}
            classNames={{ enterActive: 'animate-delayed-fade-in-1' }}
          >
            <div
              ref={pricingCardsContainerRef}
              className={`overflow-x-scroll snap-x snap-mandatory scroll-smooth px-1/12 mb-6 ${
                pricingCardsHasBeenInView ? 'flex' : 'hidden'
              }`}
            >
              {pricingCardsOrder.map(pricingCard => (
                <PricingCard key={`${pricingCard}-pricing-card`} pricingCard={pricingCard} />
              ))}
              <div>&#160;&#160;</div>
            </div>
          </CSSTransition>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Pricing;
