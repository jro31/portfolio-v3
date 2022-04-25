import { CSSTransition } from 'react-transition-group';

const JethroCodesSection = props => {
  return (
    <div
      ref={props.jethroCodesRef || null}
      className={`flex-col lg:basis-1/2 xl:basis-1/3 ${props.className || ''}`}
    >
      <CSSTransition
        in={props.in}
        timeout={2000}
        classNames={{ enterActive: 'animate-fade-in lg:animate-none xl:animate-delayed-fade-in-2' }}
      >
        <div className={`text-center ${props.in ? 'block' : 'hidden'}`}>
          ...or checkout my projects in more detail at jethro.codes...
        </div>
      </CSSTransition>
      <CSSTransition
        in={props.in}
        timeout={2500}
        classNames={{
          enterActive: 'animate-delayed-fade-in-1 lg:animate-none xl:animate-delayed-fade-in-3',
        }}
      >
        <div
          className={`items-center justify-center mt-10 xl:mt-0 ${props.in ? 'flex' : 'hidden'}`}
        >
          <a href='https://jethro.codes/' target='_blank' rel='noreferrer'>
            <img
              src='images/jethro-codes.jpeg'
              alt='jethro.codes'
              className='max-h-[300px] xs:max-h-[350px] lg:max-h-[358px] xl:max-h-[434px]'
            />
          </a>
        </div>
      </CSSTransition>
    </div>
  );
};

export default JethroCodesSection;
