// TODO - Style this properly
// FIXME - Clicking on Projects/Contacts doesn't work properly sections haven't already rendered

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import useScrollTo from '../../../../hooks/useScrollTo';
import { sectionOrder } from '../../../../pages';
import SubtleLink from '../../../ui/navigation/SubtleLink';
import useNavBackgroundIsDark from '../../../../hooks/useNavBackgroundIsDark';
import { navbarActions } from '../../../../store/navbar';

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
      mountOnEnter
      in={navbarIsVisible}
      timeout={3000}
      classNames={{ enterActive: 'animate-delayed-fade-in-4' }}
    >
      <div className='fixed top-0 left-3 bg-transparent z-50'>
        <div className='hidden lg:flex h-navbar-height w-screen justify-around items-center'>
          {sectionOrder.map((section, i) => (
            // TODO - After updates to the SubtleLink component (moving 'pb-3' within the ternary, in order to display as wanted in the projects section), the nav item for the element in view is no longer in line
            // Probably cease using the SubtleLink component; it's currently serving too many masters, and having the nav links be styled uniquely would make sense
            <SubtleLink
              key={`desktop-nav-${section}-link`}
              underline={elementIsInView[section] && !elementIsInView[sectionOrder[i - 1]]}
              background={navBackgroundIsDark() ? 'dark' : 'light'}
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
