// TODO - Simplify this section - The key focus is the form, the social media links can be in the form of a footer, the jethro.codes link can be much smaller (or also part of the footer)
// TODO - Also update the form - It should include a phone number input, and some more specific questions than just 'Message' (such as 'What are some times that you are available', and some questions asking about their project)

// TODO - Delete any components you're no longer user (FormField?)

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

import { contactFormActions } from '../../../store/contact-form';
import { contactForm, contactSection, contactTitle } from '../../../pages';
import SectionContainer from '../SectionContainer';
import Button from '../../ui/navigation/Button';
import Title from '../../ui/text/Title';
import FormField from '../../ui/form/FormField';
import { input, textarea } from '../../ui/form/FormField';
import LoadingSpinner from '../../ui/svg/LoadingSpinner';
import useElementRef from '../../../hooks/useElementRef';
import Footer from './Footer';

const successMessage = 'Email sent successfully!';

const Contact = () => {
  const dispatch = useDispatch();
  const titleHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[contactTitle]
  );
  const formHasBeenInView = useSelector(state => state.elementIsInView.hasBeenInView[contactForm]);
  const enteredFirstName = useSelector(state => state.contactForm.enteredFirstName);
  const enteredLastName = useSelector(state => state.contactForm.enteredLastName);
  const enteredEmail = useSelector(state => state.contactForm.enteredEmail);
  const enteredPhone = useSelector(state => state.contactForm.enteredPhone);
  const enteredMessage = useSelector(state => state.contactForm.enteredMessage);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  const elementRef = useElementRef();

  const formIsValid = () =>
    // TODO - Remember to update this
    enteredName.trim().length > 0 &&
    enteredEmail.trim().length > 0 &&
    enteredMessage.trim().length > 0;

  const disableButton = () => !formIsValid() || isSubmitting;

  const handleFormFieldChange = (newValue, updateAction) => {
    dispatch(updateAction(newValue));
    setSendStatus('');
  };

  const formSubmitHandler = async event => {
    event.preventDefault();
    setIsSubmitting(true);
    setSendStatus('');

    if (!formIsValid()) return;

    try {
      const response = await fetch('/api/sendgrid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // TODO - This will need updating
          enteredName: enteredName.trim(),
          enteredEmail: enteredEmail.trim(),
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
    <SectionContainer section={contactSection} className='bg-white'>
      <div className='flex flex-col items-end justify-around min-h-screen-minus-mobile-nav lg:min-h-screen-minus-nav h-full w-full'>
        <div ref={elementRef(contactTitle)} className='w-11/12'>
          <CSSTransition
            in={titleHasBeenInView}
            timeout={1000}
            classNames={{ enterActive: 'animate-fade-in' }}
          >
            <Title className={titleHasBeenInView ? 'block' : 'hidden'}>Get in touch</Title>
          </CSSTransition>
        </div>
        {/* <div className='flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap lg:justify-between gap-10 lg:gap-0 w-11/12 pr-1/12'>
          <div
            ref={elementRef(contactForm)}
            className='lg:basis-full lg:shrink-0 xl:basis-1/3 xl:shrink lg:mb-10 xl:mb-0'
          >
            <CSSTransition
              in={formHasBeenInView}
              timeout={1500}
              classNames={{ enterActive: 'animate-fade-in lg:animate-delayed-fade-in-1' }}
            >
              <div className={`flex-col gap-10 ${formHasBeenInView ? 'flex' : 'hidden'}`}>
                <div className='flex flex-col gap-3'>
                  <div>
                    Interested in working together, or just want to say hi, drop me an email...
                  </div>
                  <form className='flex flex-col gap-3 text-black' onSubmit={formSubmitHandler}>
                    <FormField
                      type={input}
                      required
                      placeholder='Name'
                      value={enteredName}
                      onChange={event =>
                        handleFormFieldChange(event.target.value, contactFormActions.setEnteredName)
                      }
                    />
                    <FormField
                      type={input}
                      required
                      placeholder='Email'
                      value={enteredEmail}
                      onChange={event =>
                        handleFormFieldChange(
                          event.target.value,
                          contactFormActions.setEnteredEmail
                        )
                      }
                    />
                    <FormField
                      type={textarea}
                      required
                      placeholder='Message'
                      value={enteredMessage}
                      onChange={event =>
                        handleFormFieldChange(
                          event.target.value,
                          contactFormActions.setEnteredMessage
                        )
                      }
                    />
                    <div
                      className={`${sendStatus === successMessage ? 'text-success' : 'text-error'}`}
                    >
                      {sendStatus}
                    </div>
                    <Button disabled={disableButton()}>
                      {isSubmitting ? (
                        <div className='flex justify-center'>
                          <LoadingSpinner />
                        </div>
                      ) : (
                        'Send email'
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </CSSTransition>
          </div>
        </div> */}

        <div
          className='relative lg:grid lg:grid-cols-5'
          ref={elementRef(contactForm)} // TODO - Move this to whichever element you need it on; currently here to prevent error
        >
          <div className='bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 xl:pr-12'>
            <div className='max-w-lg mx-auto'>
              <h2 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
                Get in touch
              </h2>
              <p className='mt-3 text-lg leading-6 text-gray-500'>
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst
                amet. Sapien tortor lacus arcu.
              </p>
              <dl className='mt-8 text-base text-gray-500'>
                <div>
                  <dt className='sr-only'>Postal address</dt>
                  <dd>
                    <p>742 Evergreen Terrace</p>
                    <p>Springfield, OR 12345</p>
                  </dd>
                </div>
                <div className='mt-6'>
                  <dt className='sr-only'>Phone number</dt>
                  <dd className='flex'>
                    <PhoneIcon className='flex-shrink-0 h-6 w-6 text-gray-400' aria-hidden='true' />
                    <span className='ml-3'>+1 (555) 123-4567</span>
                  </dd>
                </div>
                <div className='mt-3'>
                  <dt className='sr-only'>Email</dt>
                  <dd className='flex'>
                    <MailIcon className='flex-shrink-0 h-6 w-6 text-gray-400' aria-hidden='true' />
                    <span className='ml-3'>support@example.com</span>
                  </dd>
                </div>
              </dl>
              <p className='mt-6 text-base text-gray-500'>
                Looking for careers?{' '}
                <a href='#' className='font-medium text-gray-700 underline'>
                  View all job openings
                </a>
                .
              </p>
            </div>
          </div>
          <div className='bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12'>
            <div className='max-w-lg mx-auto lg:max-w-none'>
              <form
                action='#'
                method='POST'
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
                    className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
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
                    className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
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
                <div className='sm:col-span-2'>
                  <label htmlFor='email' className='sr-only'>
                    Email
                  </label>
                  <input
                    id='email'
                    required
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                    placeholder='Email*'
                    value={enteredEmail}
                    onChange={event =>
                      handleFormFieldChange(event.target.value, contactFormActions.setEnteredEmail)
                    }
                  />
                </div>
                <div className='sm:col-span-2'>
                  <label htmlFor='phone' className='sr-only'>
                    Phone
                  </label>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    autoComplete='tel'
                    className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                    placeholder='Phone'
                    value={enteredPhone}
                    onChange={event =>
                      handleFormFieldChange(event.target.value, contactFormActions.setEnteredPhone)
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
                    className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                    placeholder='Message'
                    defaultValue={''}
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
                  <button
                    type='submit'
                    className='inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </SectionContainer>
  );
};

export default Contact;
