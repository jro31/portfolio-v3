import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CSSTransition from 'react-transition-group/CSSTransition';

import useScrollTo from '../../../hooks/useScrollTo';
import useLiveSection from '../../../hooks/useLiveSection';
import { sectionOrder } from '../../../pages';
import { navbarActions } from '../../../store/navbar';

const Navbar = () => {
  const dispatch = useDispatch();
  const windowHeight = useSelector(state => state.windowDimensions.height);
  const windowScrollYPosition = useSelector(state => state.windowScrollPosition.yPosition);
  const navbarIsVisible = useSelector(state => state.navbar.isVisible);
  const scrollTo = useScrollTo();
  const liveSection = useLiveSection();

  const handleSectionClick = section => {
    scrollTo(section);
  };

  useEffect(() => {
    if (!navbarIsVisible) {
      if (windowScrollYPosition && windowHeight && windowScrollYPosition >= windowHeight) {
        dispatch(navbarActions.showNavbar());
      }
    }
  }, [dispatch, navbarIsVisible, windowHeight, windowScrollYPosition]);

  return (
    <CSSTransition
      mountOnEnter
      in={navbarIsVisible}
      timeout={400}
      classNames={{ enterActive: 'animate-slide-in-right' }}
    >
      <div className='fixed top-0 h-navbar-height w-full box-border bg-transparent flex justify-around items-center'>
        {sectionOrder.map(section => (
          <div
            className={`uppercase cursor-pointer ${liveSection() === section ? 'underline' : ''}`}
            onClick={() => handleSectionClick(section)}
            key={section}
          >
            {section}
          </div>
        ))}
      </div>
    </CSSTransition>
  );
};

export default Navbar;
