// TODO - Transition in elements

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { contactFormActions } from '../../../store/contact-form';
import {
  contactForm,
  contactJethroCodesLink,
  contactSection,
  contactSocialMediaLinks,
  contactTitle,
} from '../../../pages';
import SectionContainer from '../SectionContainer';
import Button from '../../ui/navigation/Button';
import Title from '../../ui/text/Title';
import FormField from '../../ui/form/FormField';
import { input, textarea } from '../../ui/form/FormField';
import SocialMediaCard from './SocialMediaCard';
import LoadingSpinner from '../../ui/svg/LoadingSpinner';
import JethroCodesSection from './JethroCodesSection';
import useElementRef from '../../../hooks/useElementRef';

const successMessage = 'Email sent successfully!';

export const email = 'Email';
export const gitHub = 'GitHub';
export const instagram = 'Instagram';
export const linkedIn = 'LinkedIn';
export const twitter = 'Twitter';

export const socialMediaCardOrder = [gitHub, linkedIn, instagram, twitter, email];

const Contact = () => {
  const dispatch = useDispatch();
  const titleHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[contactTitle]
  );
  const formHasBeenInView = useSelector(state => state.elementIsInView.hasBeenInView[contactForm]);
  const jethroCodesHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[contactJethroCodesLink]
  );
  const socialMediaLinksHaveBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[contactSocialMediaLinks]
  );
  const enteredName = useSelector(state => state.contactForm.enteredName);
  const enteredEmail = useSelector(state => state.contactForm.enteredEmail);
  const enteredMessage = useSelector(state => state.contactForm.enteredMessage);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  const elementRef = useElementRef();

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
        <div ref={elementRef(contactTitle)} className='w-11/12'>
          <CSSTransition
            mountOnEnter
            in={titleHasBeenInView}
            timeout={1000}
            classNames={{ enterActive: 'animate-fade-in' }}
          >
            <Title>Get in touch</Title>
          </CSSTransition>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0 w-11/12 pr-1/12'>
          <div ref={elementRef(contactForm)} className='lg:basis-1/2 xl:basis-1/3'>
            <CSSTransition
              mountOnEnter
              in={formHasBeenInView}
              timeout={1500}
              classNames={{ enterActive: 'animate-fade-in lg:animate-delayed-fade-in-1' }}
            >
              <div>
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
                <JethroCodesSection in={true} className='hidden lg:flex xl:hidden' />
              </div>
            </CSSTransition>
          </div>
          <div
            ref={elementRef(contactSocialMediaLinks)}
            className='flex flex-col gap-3 lg:basis-1/2 xl:basis-1/3 lg:order-last min-h-[402px] 2xs:min-h-[422px] xs:min-h-[482px] lg:min-h-[436px] xl:min-h-[482px]'
          >
            <CSSTransition
              mountOnEnter
              in={socialMediaLinksHaveBeenInView}
              timeout={2500}
              classNames={{
                enterActive:
                  'animate-fade-in lg:animate-delayed-fade-in-2 xl:animate-delayed-fade-in-3',
              }}
            >
              <div>
                <div className='text-center lg:text-right'>
                  <span className='lg:hidden'>...or find me in any of these spaces...</span>
                  <span className='hidden lg:block'>...or find me in any of these spaces!</span>
                </div>
                <div className='flex flex-col gap-3 items-center lg:items-end'>
                  {socialMediaCardOrder.map(platform => (
                    <SocialMediaCard key={`${platform}-social-media-card`} platform={platform} />
                  ))}
                </div>
              </div>
            </CSSTransition>
          </div>
          <JethroCodesSection
            in={jethroCodesHasBeenInView}
            jethroCodesRef={elementRef(contactJethroCodesLink)}
            className='flex lg:hidden xl:flex'
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
