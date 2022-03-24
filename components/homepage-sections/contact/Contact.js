// TODO - Transition in elements

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactFormActions } from '../../../store/contact-form';
import { contactSection } from '../../../pages';
import SectionContainer from '../SectionContainer';
import Button from '../../ui/navigation/Button';
import Title from '../../ui/text/Title';
import FormField from '../../ui/form/FormField';

import { input, textarea } from '../../ui/form/FormField';
import SocialMediaCard from './SocialMediaCard';
import LoadingSpinner from '../../ui/svg/LoadingSpinner';

const successMessage = 'Email sent successfully!';

export const email = 'Email';
export const gitHub = 'GitHub';
export const instagram = 'Instagram';
export const linkedIn = 'LinkedIn';
export const twitter = 'Twitter';

const Contact = () => {
  const dispatch = useDispatch();
  const enteredName = useSelector(state => state.contactForm.enteredName);
  const enteredEmail = useSelector(state => state.contactForm.enteredEmail);
  const enteredMessage = useSelector(state => state.contactForm.enteredMessage);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  const formIsValid = () =>
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
      className='bg-gradient-to-br from-slate-800 via-black to-black text-white'
    >
      <div className='flex flex-col items-end justify-around min-h-screen-minus-mobile-nav lg:min-h-screen-minus-nav h-full w-full'>
        <div className='w-11/12'>
          <Title>Get in touch</Title>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0 w-11/12 pr-1/12'>
          <div className='flex flex-col gap-3 basis-1/3'>
            <div>Interested in working together, or just want to say hi, drop me an email...</div>
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
                  handleFormFieldChange(event.target.value, contactFormActions.setEnteredEmail)
                }
              />
              <FormField
                type={textarea}
                required
                placeholder='Message'
                value={enteredMessage}
                onChange={event =>
                  handleFormFieldChange(event.target.value, contactFormActions.setEnteredMessage)
                }
              />
              <div className={`${sendStatus === successMessage ? 'text-success' : 'text-error'}`}>
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
          <div className='flex flex-col gap-3 basis-1/3 lg:order-last'>
            <div className='text-center lg:text-right'>
              <span className='lg:hidden'>...or find me in any of these spaces...</span>
              <span className='hidden lg:block'>...or find me in any of these spaces!</span>
            </div>
            <div className='flex flex-col gap-3 items-center'>
              <SocialMediaCard platform={gitHub} />
              <SocialMediaCard platform={linkedIn} />
              <SocialMediaCard platform={instagram} />
              <SocialMediaCard platform={twitter} />
              <SocialMediaCard platform={email} />
            </div>
          </div>
          <div className='flex flex-col gap-3 basis-1/3'>
            {/* TODO - Large screen, have this below the email form */}
            <div className='text-center'>
              <span className='lg:hidden'>
                ...or checkout my projects in more detail at jethro.codes!
              </span>
              <span className='hidden lg:block'>
                ...or checkout my projects in more detail at jethro.codes...
              </span>
            </div>
            {/* TODO - Add link */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
