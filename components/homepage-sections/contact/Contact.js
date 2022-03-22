import { useDispatch, useSelector } from 'react-redux';

import { contactFormActions } from '../../../store/contact-form';
import { contactSection } from '../../../pages';
import SectionContainer from '../SectionContainer';

const Contact = () => {
  const dispatch = useDispatch();
  const enteredName = useSelector(state => state.contactForm.enteredName);
  const enteredEmail = useSelector(state => state.contactForm.enteredEmail);
  const enteredMessage = useSelector(state => state.contactForm.enteredMessage);
  // TODO - Add 'isSubmitting' state

  const formSubmitHandler = async event => {
    event.preventDefault();
    console.log('🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧');

    // TODO - Validate inputs

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: enteredEmail,
        fullname: enteredName,
        message: enteredMessage,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    console.log(res);

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(enteredEmail, enteredName, enteredMessage);
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
        <button>Send email</button>
        {/* TODO - Display 'isSubmitting' state when submitting somehow */}
        {/* TODO - Show a success/failure message to the user */}
      </form>
    </SectionContainer>
  );
};

export default Contact;
