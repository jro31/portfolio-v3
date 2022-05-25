// TODO - Simplify this section - The key focus is the form, the social media links can be in the form of a footer, the jethro.codes link can be much smaller (or also part of the footer)
// TODO - Also update the form - It should include a phone number input, and some more specific questions than just 'Message' (such as 'What are some times that you are available', and some questions asking about their project)

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { MailIcon } from '@heroicons/react/outline';

import { contactFormActions } from '../../../store/contact-form';
import { contactBlurb, contactForm, contactSection, contactTitle } from '../../../pages';
import SectionContainer from '../SectionContainer';
import Title from '../../ui/text/Title';
import LoadingSpinner from '../../ui/svg/LoadingSpinner';
import useElementRef from '../../../hooks/useElementRef';
import Footer from './Footer';

const inputClasses =
  'block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md';

const successMessage = 'Email sent successfully!';

const Contact = () => {
  const dispatch = useDispatch();
  const titleHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[contactTitle]
  );
  const blurbHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[contactBlurb]
  );
  const formHasBeenInView = useSelector(state => state.elementIsInView.hasBeenInView[contactForm]);
  const enteredFirstName = useSelector(state => state.contactForm.enteredFirstName);
  const enteredLastName = useSelector(state => state.contactForm.enteredLastName);
  const enteredEmail = useSelector(state => state.contactForm.enteredEmail);
  const enteredPhone = useSelector(state => state.contactForm.enteredPhone);
  const enteredAvailableTimes = useSelector(state => state.contactForm.enteredAvailableTimes);
  const enteredMessage = useSelector(state => state.contactForm.enteredMessage);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  const elementRef = useElementRef();

  const formIsValid = () =>
    enteredFirstName.trim().length > 0 &&
    enteredEmail.trim().length > 0 &&
    enteredMessage.trim().length > 0;

  const disableButton = () => !formIsValid() || isSubmitting;

  const handleFormFieldChange = (newValue, updateAction) => {
    dispatch(updateAction(newValue));
    setSendStatus('');
  };

  const formSubmitHandler = async event => {
    event.preventDefault();
    setSendStatus('');

    if (!formIsValid()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/sendgrid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          enteredFirstName: enteredFirstName.trim(),
          enteredLastName: enteredLastName.trim(),
          enteredEmail: enteredEmail.trim(),
          enteredPhone: enteredPhone.trim(),
          enteredAvailableTimes: enteredAvailableTimes.trim(),
          enteredMessage: enteredMessage.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSendStatus(successMessage);
        setIsSubmitting(false);
        dispatch(contactFormActions.resetForm());
      } else {
        throw new Error(data.error_message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSendStatus(error.message);
      setIsSubmitting(false);
    }
  };

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
                  To arrange a consultation, complete this form and I will get back to you. Please
                  provide as much detail as possible.
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
          <div ref={elementRef(contactForm)} className='py-6 lg:col-span-3 lg:pl-8 xl:pl-12'>
            <CSSTransition
              in={formHasBeenInView}
              timeout={2000}
              classNames={{
                enterActive: 'animate-fade-in lg:animate-delayed-fade-in-2',
              }}
            >
              <div className=''>
                <form
                  onSubmit={formSubmitHandler}
                  className='grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-x-8'
                >
                  <div>
                    <label htmlFor='first-name' className='sr-only'>
                      First name
                    </label>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className={inputClasses}
                      placeholder='First name*'
                      value={enteredFirstName}
                      onChange={event =>
                        handleFormFieldChange(
                          event.target.value,
                          contactFormActions.setEnteredFirstName
                        )
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor='last-name' className='sr-only'>
                      Last name
                    </label>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      className={inputClasses}
                      placeholder='Last name'
                      value={enteredLastName}
                      onChange={event =>
                        handleFormFieldChange(
                          event.target.value,
                          contactFormActions.setEnteredLastName
                        )
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='sr-only'>
                      Email
                    </label>
                    <input
                      id='email'
                      required
                      name='email'
                      type='email'
                      autoComplete='email'
                      className={inputClasses}
                      placeholder='Email*'
                      value={enteredEmail}
                      onChange={event =>
                        handleFormFieldChange(
                          event.target.value,
                          contactFormActions.setEnteredEmail
                        )
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor='phone' className='sr-only'>
                      Phone
                    </label>
                    <input
                      type='text'
                      name='phone'
                      id='phone'
                      autoComplete='tel'
                      className={inputClasses}
                      placeholder='Phone'
                      value={enteredPhone}
                      onChange={event =>
                        handleFormFieldChange(
                          event.target.value,
                          contactFormActions.setEnteredPhone
                        )
                      }
                    />
                  </div>
                  <div className='sm:col-span-2'>
                    <label htmlFor='available-times' className='sr-only'>
                      Available times
                    </label>
                    <input
                      type='text'
                      name='available-times'
                      id='available-times'
                      className={inputClasses}
                      placeholder="What are some dates/times that you're available for a video call?"
                      value={enteredAvailableTimes}
                      onChange={event =>
                        handleFormFieldChange(
                          event.target.value,
                          contactFormActions.setEnteredAvailableTimes
                        )
                      }
                    />
                  </div>
                  <div className='sm:col-span-2'>
                    <label htmlFor='message' className='sr-only'>
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      className={inputClasses}
                      placeholder='Tell me about your project and what you need from me*'
                      value={enteredMessage}
                      onChange={event =>
                        handleFormFieldChange(
                          event.target.value,
                          contactFormActions.setEnteredMessage
                        )
                      }
                    />
                  </div>
                  <div>
                    <div
                      className={`mb-1 ${
                        sendStatus === successMessage ? 'text-success' : 'text-error'
                      }`}
                    >
                      {sendStatus}
                    </div>
                    <button
                      disabled={disableButton()}
                      type='submit'
                      className='inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-300'
                    >
                      {isSubmitting ? (
                        <div className='flex justify-center px-5'>
                          <LoadingSpinner />
                        </div>
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </CSSTransition>
          </div>
        </div>

        <Footer />
      </div>
    </SectionContainer>
  );
};

export default Contact;
