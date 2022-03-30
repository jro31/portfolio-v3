import { CSSTransition } from 'react-transition-group';
import InDevelopmentIcon from '../../ui/svg/InDevelopmentIcon';
import Heading from '../../ui/text/Heading';

const JethroCodesSection = props => {
  return (
    <div
      ref={props.jethroCodesRef || null}
      className={`flex-col xl:basis-1/3 ${props.className || ''}`}
    >
      <CSSTransition
        in={props.in}
        timeout={2000}
        classNames={{ enterActive: 'animate-fade-in lg:animate-none xl:animate-delayed-fade-in-2' }}
      >
        <div className={`text-center ${props.in ? 'block' : 'hidden'}`}>
          <span className='lg:hidden'>
            ...or checkout my projects in more detail at jethro.codes!
          </span>
          <span className='hidden lg:block'>
            ...or checkout my projects in more detail at jethro.codes...
          </span>
        </div>
      </CSSTransition>
      {/* TODO - Update this to link to jethro.codes */}
      <CSSTransition
        in={props.in}
        timeout={2500}
        classNames={{
          enterActive: 'animate-delayed-fade-in-1 lg:animate-none xl:animate-delayed-fade-in-3',
        }}
      >
        <div
          className={`flex-col h-full items-center justify-center gap-5 mt-10 xl:mt-0 ${
            props.in ? 'flex' : 'hidden'
          }`}
        >
          <Heading className='text-slate-600'>Coming soon!</Heading>
          <div className='h-40 w-40'>
            <InDevelopmentIcon color='rgb(71 85 105)' />
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default JethroCodesSection;
