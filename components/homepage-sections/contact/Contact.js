import { useDispatch, useSelector } from 'react-redux';

import { contactFormActions } from '../../../store/contact-form';
import { contactSection } from '../../../pages';
import SectionContainer from '../SectionContainer';
import { useState } from 'react';
import Button from '../../ui/navigation/Button';
import Title from '../../ui/text/Title';
import FormField from '../../ui/form/FormField';

import { input, textarea } from '../../ui/form/FormField';

const successMessage = 'Email sent successfully!';

const Contact = () => {
  const dispatch = useDispatch();
  const enteredName = useSelector(state => state.contactForm.enteredName);
  const enteredEmail = useSelector(state => state.contactForm.enteredEmail);
  const enteredMessage = useSelector(state => state.contactForm.enteredMessage);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  const formIsValid = () => {};

  const formSubmitHandler = async event => {
    event.preventDefault();
    setIsSubmitting(true);
    setSendStatus('');

    // TODO - Validate inputs
    // TODO - Typing into any of the inputs should clear the 'sendStatus' state

    try {
      const response = await fetch('/api/sendgrid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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
    <SectionContainer
      section={contactSection}
      className='bg-gradient-to-br from-slate-800 via-black to-slate-800 text-white'
    >
      <div className='flex flex-col items-end justify-around min-h-screen-minus-mobile-nav lg:min-h-screen-minus-nav h-full w-full'>
        <div className='w-11/12'>
          <div>
            <Title>Get in touch</Title>
          </div>
        </div>
        <div className='flex justify-between w-11/12 pr-1/12'>
          <div className='basis-1/3'>
            <div>Interested in working together, or just want to say hi, drop me an email...</div>
            <form className='flex flex-col gap-3 text-black' onSubmit={formSubmitHandler}>
              <FormField
                type={input}
                required
                placeholder='Name'
                value={enteredName}
                onChange={event => dispatch(contactFormActions.setEnteredName(event.target.value))}
              />
              <FormField
                type={input}
                required
                placeholder='Email'
                value={enteredEmail}
                onChange={event => dispatch(contactFormActions.setEnteredEmail(event.target.value))}
              />
              <FormField
                type={textarea}
                required
                placeholder='Message'
                value={enteredMessage}
                onChange={event =>
                  dispatch(contactFormActions.setEnteredMessage(event.target.value))
                }
              />
              <div className={`${sendStatus === successMessage ? 'text-success' : 'text-error'}`}>
                {sendStatus}
              </div>
              <Button>Send email</Button>
              {/* TODO - Display 'isSubmitting' state when submitting (and disable the button) */}
              {/* TODO - Disable the button until all fields are populated */}
            </form>
          </div>
          {/* TODO - Add link */}
          <div className='basis-1/3'>
            ...or checkout my projects in more detail at jethro.codes...
          </div>
          {/* TODO - Add Github, Linkedin, Instagram?, Twitter? */}
          <div className='basis-1/3'>...or find me in any of these spaces!</div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
