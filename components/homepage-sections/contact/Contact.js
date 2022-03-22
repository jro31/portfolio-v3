import { useDispatch, useSelector } from 'react-redux';

import { contactFormActions } from '../../../store/contact-form';
import { contactSection } from '../../../pages';
import SectionContainer from '../SectionContainer';
import { useState } from 'react';

const successMessage = 'Email sent successfully!';

const Contact = () => {
  const dispatch = useDispatch();
  const enteredName = useSelector(state => state.contactForm.enteredName);
  const enteredEmail = useSelector(state => state.contactForm.enteredEmail);
  const enteredMessage = useSelector(state => state.contactForm.enteredMessage);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

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
    <SectionContainer section={contactSection} className='bg-blue-500'>
      <form onSubmit={formSubmitHandler}>
        <input
          required
          placeholder='Name'
          value={enteredName}
          onChange={event => dispatch(contactFormActions.setEnteredName(event.target.value))}
        />
        <input
          required
          placeholder='Email'
          value={enteredEmail}
          onChange={event => dispatch(contactFormActions.setEnteredEmail(event.target.value))}
        />
        <textarea
          required
          placeholder='Message'
          value={enteredMessage}
          onChange={event => dispatch(contactFormActions.setEnteredMessage(event.target.value))}
        />
        <div className={`${sendStatus === successMessage ? 'text-success' : 'text-error'}`}>
          {sendStatus}
        </div>
        <button>Send email</button>
        {/* TODO - Display 'isSubmitting' state when submitting (and disable the button) */}
      </form>
    </SectionContainer>
  );
};

export default Contact;
