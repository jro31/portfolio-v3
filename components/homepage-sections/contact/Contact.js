import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { contactSection, contactTitle } from '../../../pages';
import SectionContainer from '../SectionContainer';
import Title from '../../ui/text/Title';
import useElementRef from '../../../hooks/useElementRef';
import Footer from './Footer';
import Blurb from './Blurb';
import ContactForm from './ContactForm';

const Contact = () => {
  const titleHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[contactTitle]
  );

  const elementRef = useElementRef();

  return (
    <SectionContainer section={contactSection} className='bg-gray-50'>
      <div className='flex flex-col items-end justify-around min-h-screen-minus-mobile-nav lg:min-h-screen-minus-nav h-full w-full'>
        <div ref={elementRef(contactTitle)} className='w-11/12'>
          <CSSTransition
            in={titleHasBeenInView}
            timeout={2000}
            classNames={{ enterActive: 'animate-slow-fade-in' }}
          >
            <Title className={titleHasBeenInView ? 'block' : 'hidden'}>Get in touch</Title>
          </CSSTransition>
        </div>
        <div className='relative lg:grid lg:grid-cols-5 w-11/12 pr-1/12'>
          <Blurb />
          <ContactForm />
        </div>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default Contact;
