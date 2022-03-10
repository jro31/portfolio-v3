import { CSSTransition } from 'react-transition-group';

const Overlay = props => {
  const transitionClassNames = {
    enter: '',
    enterActive: 'animate-fade-in',
    exit: '',
    exitActive: 'animate-fade-out',
  };

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.in}
      timeout={1000}
      classNames={transitionClassNames}
    >
      <div
        onClick={props.onClick || null}
        className={`fixed top-0 w-screen h-screen bg-gray-600 bg-opacity-70 z-30 ${
          props.className || ''
        }`}
      />
    </CSSTransition>
  );
};

export default Overlay;
