import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { contactFormActions } from '../../../store/contact-form';
import { contactForm } from '../../../pages';
import useElementRef from '../../../hooks/useElementRef';
import LoadingSpinner from '../../ui/svg/LoadingSpinner';

const inputClasses =
  'block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md';

const successMessage = 'Email sent successfully!';

const ContactForm = () => {
  const dispatch = useDispatch();
  const formHasBeenInView = useSelector(state => state.elementIsInView.hasBeenInView[contactForm]);
  const enteredFirstName = useSelector(state => state.contactForm.enteredFirstName);
  const enteredLastName = useSelector(state => state.contactForm.enteredLastName);
  const enteredEmail = useSelector(state => state.contactForm.enteredEmail);
  const enteredPhone = useSelector(state => state.contactForm.enteredPhone);
  const enteredAvailableTimes = useSelector(state => state.contactForm.enteredAvailableTimes);
  const enteredMessage = useSelector(state => state.contactForm.enteredMessage);
  const windowWidth = useSelector(state => state.windowDimensions.width);

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

  const availableTimesPlaceholder = () => {
    switch (true) {
      case windowWidth < 640:
        return 'What times are you available?';
      case windowWidth < 1024:
        return "What are some dates/times that you're available for a video call?";
      case windowWidth < 1104:
        return 'What times are you available?';
      default:
        return "What are some dates/times that you're available for a video call?";
    }
  };

  return (
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
                  handleFormFieldChange(event.target.value, contactFormActions.setEnteredFirstName)
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
                  handleFormFieldChange(event.target.value, contactFormActions.setEnteredLastName)
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
                  handleFormFieldChange(event.target.value, contactFormActions.setEnteredEmail)
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
                  handleFormFieldChange(event.target.value, contactFormActions.setEnteredPhone)
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
                placeholder={availableTimesPlaceholder()}
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
                placeholder='Tell me about your project and the work you need from me*'
                value={enteredMessage}
                onChange={event =>
                  handleFormFieldChange(event.target.value, contactFormActions.setEnteredMessage)
                }
              />
            </div>
            <div>
              <div
                className={`mb-1 ${sendStatus === successMessage ? 'text-success' : 'text-error'}`}
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
  );
};

export default ContactForm;
