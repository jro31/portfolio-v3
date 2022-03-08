import { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';

import { navbarActions } from '../../../store/navbar';
import Overlay from '../../ui/Overlay';

const NavbarMobileMenu = () => {
  const dispatch = useDispatch();
  const mobileNavIsOpen = useSelector(state => state.navbar.mobileNavIsOpen);

  const transitionClassNames = {
    enter: '',
    enterActive: 'animate-slide-in-right',
    exit: '',
    exitActive: 'animate-slide-out-left',
  };

  return (
    <Fragment>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={mobileNavIsOpen}
        timeout={1000}
        classNames={transitionClassNames}
      >
        <div className='fixed top-0 pt-mobile-navbar-height h-screen bg-slate-200 z-20'>
          I&#34;m the mobile nav menu
        </div>
      </CSSTransition>
      <Overlay in={mobileNavIsOpen} onClick={() => dispatch(navbarActions.closeMobileNav())} />
    </Fragment>
  );
};

export default NavbarMobileMenu;
