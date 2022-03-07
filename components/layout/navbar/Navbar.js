import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CSSTransition from 'react-transition-group/CSSTransition';

import useScrollTo from '../../../hooks/useScrollTo';
import useLiveSection from '../../../hooks/useLiveSection';
import useIsDarkBackground from '../../../hooks/useIsDarkBackground';
import { sectionOrder } from '../../../pages';
import { navbarActions } from '../../../store/navbar';
import SubtleLink from '../../ui/navigation/SubtleLink';
import Hamburger from '../../ui/navigation/Hamburger';

const Navbar = () => {
  const dispatch = useDispatch();
  const windowHeight = useSelector(state => state.windowDimensions.height);
  const windowScrollYPosition = useSelector(state => state.windowScrollPosition.yPosition);
  const navbarIsVisible = useSelector(state => state.navbar.isVisible);
  const mobileNavIsOpen = useSelector(state => state.navbar.mobileNavIsOpen);
  const scrollTo = useScrollTo();
  const liveSection = useLiveSection();
  const isDarkBackground = useIsDarkBackground();

  const handleSectionClick = section => {
    scrollTo(section);
  };

  const toggleMobileNav = () => {
    dispatch(navbarActions.toggleMobileNav());
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
      timeout={1000}
      classNames={{ enterActive: 'animate-fade-in lg:animate-slide-in-right' }}
    >
      <div className='fixed top-0 bg-transparent'>
        <div className='flex items-center lg:hidden h-mobile-navbar-height'>
          <Hamburger
            onClick={toggleMobileNav}
            isOpen={mobileNavIsOpen}
            background={isDarkBackground() ? 'dark' : 'light'}
          />
        </div>
        <div className='hidden lg:flex h-navbar-height w-screen justify-around items-center'>
          {sectionOrder.map(section => (
            <SubtleLink
              key={section}
              underline={liveSection() === section}
              background={isDarkBackground() ? 'dark' : 'light'}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </SubtleLink>
          ))}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Navbar;
