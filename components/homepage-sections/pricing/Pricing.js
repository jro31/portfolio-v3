import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { pricingSection, pricingTitle } from '../../../pages';
import Title from '../../ui/text/Title';
import SectionContainer from '../SectionContainer';
import useElementRef from '../../../hooks/useElementRef';

const Pricing = () => {
  const titleHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[pricingTitle]
  );

  const elementRef = useElementRef();

  return (
    <SectionContainer section={pricingSection} className='bg-white'>
      <div ref={elementRef(pricingTitle)}>
        <CSSTransition
          in={titleHasBeenInView}
          timeout={2000}
          classNames={{ enterActive: 'animate-slow-fade-in' }}
        >
          <Title className={titleHasBeenInView ? 'block' : 'hidden'}>Pricing</Title>
        </CSSTransition>
      </div>
    </SectionContainer>
  );
};

export default Pricing;
