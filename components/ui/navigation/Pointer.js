import { CSSTransition } from 'react-transition-group';
import LeftPointer from '../svg/LeftPointer';
import RightPointer from '../svg/RightPointer';

export const left = 'left';
export const right = 'right';

const Pointer = props => {
  const pointerColor = 'white';

  const pointerSvgComponent = () => {
    if (props.direction === left) {
      return <LeftPointer color={pointerColor} />;
    } else if (props.direction === right) {
      return <RightPointer color={pointerColor} />;
    } else {
      throw new Error(`Invalid direction '${props.direction}' passed to Pointer`);
    }
  };

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.in}
      timeout={250}
      classNames={{ enterActive: 'animate-fade-in', exitActive: 'animate-fade-out' }}
    >
      <div
        className={`h-full w-20 absolute flex items-center ${
          props.direction === left ? 'left-0' : 'right-0'
        }`}
      >
        <div
          onClick={props.onClick || null}
          className='h-20 w-full flex justify-center items-center bg-gradient-to-b from-transparent via-black/50 to-transparent rounded-full'
        >
          <div className='w-5 h-5'>{pointerSvgComponent()}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Pointer;
