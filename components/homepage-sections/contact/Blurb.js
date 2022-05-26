import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { MailIcon } from '@heroicons/react/outline';

import { contactBlurb } from '../../../pages';
import useElementRef from '../../../hooks/useElementRef';

const Blurb = () => {
  const blurbHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[contactBlurb]
  );
  const elementRef = useElementRef();

  return (
    <div ref={elementRef(contactBlurb)} className='py-6 lg:col-span-2 lg:pr-8 xl:pr-12'>
      <CSSTransition
        in={blurbHasBeenInView}
        timeout={1500}
        classNames={{
          enterActive: 'animate-fade-in lg:animate-delayed-fade-in-1',
        }}
      >
        <div>
          <p className='text-lg leading-6 text-gray-500'>
            To arrange a consultation, contact me here and I will get back to you. Please provide as
            much detail as possible.
          </p>
          <p className='mt-4 text-lg leading-6 text-gray-500'>
            Alternatively, I can be contacted by
            <span className='lg:hidden'>
              &#160;
              <a
                href='mai&#108;to:contact&#64;jethrowilliams&#46;c&#111;m'
                target='_blank'
                rel='noreferrer'
                className='underline'
              >
                email
              </a>
              &#160;
            </span>
            <span className='hidden lg:inline'>&#160;email&#160;</span>
            or on social media.
          </p>
          <div className='hidden lg:flex mt-8 text-base text-gray-500'>
            <MailIcon className='flex-shrink-0 h-6 w-6 text-gray-400' aria-hidden='true' />
            <a
              href='mai&#108;to:contact&#64;jethrowilliams&#46;c&#111;m'
              target='_blank'
              rel='noreferrer'
            >
              <span className='ml-3'>contact&#64;jethrowilliams&#46;c&#111;m</span>
            </a>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Blurb;
