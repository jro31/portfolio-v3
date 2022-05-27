import { CSSTransition } from 'react-transition-group';
import { darkSections } from '../../../pages';
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

  const pointerColorClass = () => {
    if (props.section && darkSections.includes(props.section)) return 'bg-black/40';

    return 'bg-black/10';
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
        onClick={props.onClick || null}
        className={`w-10 z-10 absolute top-0 bottom-6 flex justify-center items-center ${pointerColorClass()} ${
          props.direction === left
            ? 'left-0 rounded-tr-2xl rounded-br-2xl'
            : 'right-0 rounded-tl-2xl rounded-bl-2xl'
        }`}
      >
        <div className='w-7 h-7'>{pointerSvgComponent()}</div>
      </div>
    </CSSTransition>
  );
};

export default Pointer;
