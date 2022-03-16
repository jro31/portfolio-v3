import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import useScrollTo from '../../../../hooks/useScrollTo';
import { sectionOrder } from '../../../../pages';
import SubtleLink from '../../../ui/navigation/SubtleLink';
import useIsDarkBackground from '../../../../hooks/useIsDarkBackground';
import { navbarActions } from '../../../../store/navbar';

const DesktopNav = () => {
  const dispatch = useDispatch();
  const navbarIsVisible = useSelector(state => state.navbar.isVisible);
  const elementIsInView = useSelector(state => state.elementIsInView.isInView);
  const scrollTo = useScrollTo();
  const isDarkBackground = useIsDarkBackground();

  const handleSectionClick = section => {
    scrollTo(section);
  };

  useEffect(() => {
    if (!navbarIsVisible) {
      if (sectionOrder.slice(1).some(section => elementIsInView[section])) {
        dispatch(navbarActions.showNavbar());
      }
    }
  }, [dispatch, navbarIsVisible, elementIsInView]);

  return (
    <CSSTransition
      mountOnEnter
      in={navbarIsVisible}
      timeout={3000}
      classNames={{ enterActive: 'animate-delayed-fade-in-4' }}
    >
      <div className='fixed top-0 left-3 bg-transparent z-50'>
        <div className='hidden lg:flex h-navbar-height w-screen justify-around items-center'>
          {sectionOrder.map((section, i) => (
            <SubtleLink
              key={`desktop-nav-${section}-link`}
              underline={elementIsInView[section] && !elementIsInView[sectionOrder[i - 1]]}
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

export default DesktopNav;
