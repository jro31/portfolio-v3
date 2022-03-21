import { useDispatch, useSelector } from 'react-redux';

import { contactFormActions } from '../../../store/contact-form';
import { contactSection } from '../../../pages';
import SectionContainer from '../SectionContainer';

const Contact = () => {
  const dispatch = useDispatch();
  const enteredName = useSelector(state => state.contactForm.enteredName);
  const enteredEmail = useSelector(state => state.contactForm.enteredEmail);
  const enteredMessage = useSelector(state => state.contactForm.enteredMessage);

  const formSubmitHandler = event => {
    event.preventDefault();
    // TODO
    console.log('🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧🦧');
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
      </form>
    </SectionContainer>
  );
};

export default Contact;
