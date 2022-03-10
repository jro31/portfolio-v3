import { Fragment } from 'react';

import DesktopNav from './desktop/DesktopNav';
import MobileNav from './mobile/MobileNav';

const Navbar = () => {
  return (
    <Fragment>
      <MobileNav />
      <DesktopNav />
    </Fragment>
  );
};

export default Navbar;
