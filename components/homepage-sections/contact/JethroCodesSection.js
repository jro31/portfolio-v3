import { CSSTransition } from 'react-transition-group';

const JethroCodesSection = props => {
  return (
    <div
      ref={props.jethroCodesRef || null}
      className={`flex-col xl:basis-1/3 ${props.className || ''}`}
    >
      <CSSTransition
        mountOnEnter
        in={props.in}
        timeout={2000}
        classNames={{ enterActive: 'animate-fade-in lg:animate-none xl:animate-delayed-fade-in-2' }}
      >
        <div className='text-center'>
          <span className='lg:hidden'>
            ...or checkout my projects in more detail at jethro.codes!
          </span>
          <span className='hidden lg:block'>
            ...or checkout my projects in more detail at jethro.codes...
          </span>
        </div>
        {/* TODO - Add link */}
      </CSSTransition>
    </div>
  );
};

export default JethroCodesSection;
