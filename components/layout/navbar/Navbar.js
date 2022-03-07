import { Fragment, useEffect } from 'react';
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
      timeout={400}
      classNames={{ enterActive: 'animate-slide-in-right' }}
    >
      <Fragment>
        <div className='flex lg:hidden fixed top-0 h-mobile-navbar-height'>
          <Hamburger
            onClick={toggleMobileNav}
            isOpen={mobileNavIsOpen}
            background={isDarkBackground() ? 'dark' : 'light'}
          />
        </div>
        <div className='hidden lg:flex fixed top-0 h-navbar-height w-full box-border bg-transparent justify-around items-center'>
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
      </Fragment>
    </CSSTransition>
  );
};

export default Navbar;
