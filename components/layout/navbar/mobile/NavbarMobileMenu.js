import { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';

import useScrollTo from '../../../../hooks/useScrollTo';
import { navbarActions } from '../../../../store/navbar';
import Overlay from '../../../ui/Overlay';
import { sectionOrder } from '../../../../pages';
import SubtleLink from '../../../ui/navigation/SubtleLink';
import useNavBackgroundIsDark from '../../../../hooks/useNavBackgroundIsDark';

const NavbarMobileMenu = () => {
  const dispatch = useDispatch();
  const mobileNavIsOpen = useSelector(state => state.navbar.mobileNavIsOpen);
  const scrollTo = useScrollTo();
  const navBackgroundIsDark = useNavBackgroundIsDark();

  const backgroundColor = () => (navBackgroundIsDark() ? 'bg-slate-800' : 'bg-slate-200');

  const handleSectionClick = section => {
    dispatch(navbarActions.closeMobileNav());
    scrollTo(section);
  };

  return (
    <Fragment>
      {/* FIXME - On Chrome on mobile, there's a slight 'flicker' when transitioning-in the menu - Not present on other browsers */}
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={mobileNavIsOpen}
        timeout={1000}
        classNames={{
          enter: '',
          enterActive: 'animate-slide-in-right',
          exit: '',
          exitActive: 'animate-slide-out-left',
        }}
      >
        <div
          className={`flex pl-mobile-navbar-height fixed top-0 lg:hidden pt-mobile-navbar-height h-screen min-w-2/3 xs:min-w-1/2 md:min-w-1/3 z-40 ${backgroundColor()}`}
        >
          <div className='flex flex-col gap-6'>
            {sectionOrder.map(section => (
              <SubtleLink
                key={`mobile-nav-${section}-link`}
                background={navBackgroundIsDark() ? 'dark' : 'light'}
                onClick={() => handleSectionClick(section)}
              >
                {section}
              </SubtleLink>
            ))}
          </div>
        </div>
      </CSSTransition>
      <Overlay
        in={mobileNavIsOpen}
        onClick={() => dispatch(navbarActions.closeMobileNav())}
        className='lg:hidden'
      />
    </Fragment>
  );
};

export default NavbarMobileMenu;
