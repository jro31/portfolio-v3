import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import useScrollTo from '../../../../hooks/useScrollTo';
import { sectionOrder } from '../../../../pages';
import useNavBackgroundIsDark from '../../../../hooks/useNavBackgroundIsDark';
import { navbarActions } from '../../../../store/navbar';
import DesktopNavItem from './DesktopNavItem';

const DesktopNav = () => {
  const dispatch = useDispatch();
  const navbarIsVisible = useSelector(state => state.navbar.isVisible);
  const elementIsInView = useSelector(state => state.elementIsInView.isInView);
  const scrollTo = useScrollTo();
  const navBackgroundIsDark = useNavBackgroundIsDark();

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
      in={navbarIsVisible}
      timeout={3000}
      classNames={{ enterActive: 'animate-delayed-fade-in-4' }}
    >
      <div className={`fixed top-0 bg-transparent z-50 ${navbarIsVisible ? 'block' : 'hidden'}`}>
        <div className='hidden lg:flex h-navbar-height w-screen justify-around items-center'>
          {sectionOrder.map((section, i) => (
            <DesktopNavItem
              key={`desktop-nav-${section}-link`}
              underline={elementIsInView[section] && !elementIsInView[sectionOrder[i - 1]]}
              background={navBackgroundIsDark() ? 'dark' : 'light'}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </DesktopNavItem>
          ))}
        </div>
      </div>
    </CSSTransition>
  );
};

export default DesktopNav;
