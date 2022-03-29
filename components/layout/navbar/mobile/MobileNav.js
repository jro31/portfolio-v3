// FIXME - Using the mobile nav to scroll to the tools/projects/contact sections when first loading the page, it doesn't scroll all the way there (might be fixed by removing the 'mountOnEnter' on these components)

import { useDispatch, useSelector } from 'react-redux';

import { navbarActions } from '../../../../store/navbar';
import Hamburger from '../../../ui/navigation/Hamburger';
import useNavBackgroundIsDark from '../../../../hooks/useNavBackgroundIsDark';
import { Fragment } from 'react';
import NavbarMobileMenu from './NavbarMobileMenu';

const MobileNav = () => {
  const dispatch = useDispatch();
  const mobileNavIsOpen = useSelector(state => state.navbar.mobileNavIsOpen);
  const navBackgroundIsDark = useNavBackgroundIsDark();

  const toggleMobileNav = () => {
    dispatch(navbarActions.toggleMobileNav());
  };

  return (
    <Fragment>
      <div className='fixed top-0 left-3 bg-transparent z-50'>
        <div className='flex items-center lg:hidden h-mobile-navbar-height'>
          <Hamburger
            onClick={toggleMobileNav}
            isOpen={mobileNavIsOpen}
            background={navBackgroundIsDark() ? 'dark' : 'light'}
          />
        </div>
      </div>
      <NavbarMobileMenu />
    </Fragment>
  );
};

export default MobileNav;
