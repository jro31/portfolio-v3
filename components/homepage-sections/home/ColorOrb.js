import { useEffect, useRef, useState } from 'react';
import randomElement from 'random-element-selector';
import { CSSTransition } from 'react-transition-group';
import FadeCircle from './FadeCircle';

const backgroundColorClasses = [
  'from-blue-500 via-blue-900',
  'from-violet-500 via-violet-900',
  'from-purple-500 via-purple-900',
  'from-indigo-500 via-indigo-900',
  'from-sky-500 via-sky-900',
  'from-yellow-500 via-yellow-900',
  'from-amber-500 via-amber-900',
  'from-orange-500 via-orange-900',
  'from-fuchsia-500 via-fuchsia-900',
];

const backgroundBeforeColorClasses = [
  'before:from-green-500 before:via-green-900',
  'before:from-emerald-500 before:via-emerald-900',
  'before:from-rose-500 before:via-rose-900',
  'before:from-pink-500 before:via-pink-900',
  // 'before:from-fuchsia-500 before:via-fuchsia-900',
  'before:from-cyan-500 before:via-cyan-900',
  'before:from-teal-500 before:via-teal-900',
  'before:from-lime-500 before:via-lime-900',
  'before:from-red-500 before:via-red-900',
];

const ColorOrb = props => {
  const [currentBackgroundColorClasses, setCurrentBackgroundColorClasses] = useState(
    'from-fuchsia-500 via-fuchsia-900'
  );
  const [currentBackgroundBeforeColorClasses, setCurrentBackgroundBeforeColorClasses] = useState(
    'before:from-rose-500 before:via-rose-900'
  );
  const [backgroundBeforeIsTransparent, setBackgroundBeforeIsTransparent] = useState(true);
  const backgroundBeforeIsTransparentRef = useRef(backgroundBeforeIsTransparent);
  backgroundBeforeIsTransparentRef.current = backgroundBeforeIsTransparent;

  const backgroundBeforeOpacityClass = () =>
    backgroundBeforeIsTransparent ? 'before:opacity-0' : 'before:opacity-100';

  useEffect(() => {
    let timeout;

    const toggleBackground = () => {
      timeout = setTimeout(() => {
        backgroundBeforeIsTransparentRef.current
          ? setCurrentBackgroundBeforeColorClasses(randomElement(backgroundBeforeColorClasses))
          : setCurrentBackgroundColorClasses(randomElement(backgroundColorClasses));
        setBackgroundBeforeIsTransparent(prevState => !prevState);
        toggleBackground();
      }, 5000);
    };

    toggleBackground();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`absolute inset-0 ${props.displayClasses || 'block'}`}>
      <CSSTransition
        in={props.in || true}
        timeout={4000}
        classNames={{ enterActive: 'animate-very-slow-fade-in' }}
      >
        <div
          className={`block absolute h-full w-full bg-gradient-radial to-black before:transition-opacity before:duration-[5000ms] before:content-[''] before:absolute before:h-full before:w-full before:z-[5] before:bg-gradient-radial before:to-black ${currentBackgroundColorClasses} ${currentBackgroundBeforeColorClasses} ${backgroundBeforeOpacityClass()}`}
        />
      </CSSTransition>

      <FadeCircle />
    </div>
  );
};

export default ColorOrb;
