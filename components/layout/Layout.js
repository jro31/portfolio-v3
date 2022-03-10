import Navbar from './navbar/Navbar';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useScrollYPosition from '../../hooks/useScrollYPosition';
import useDisplaySections from '../../hooks/useDisplaySections';

const Layout = props => {
  useWindowDimensions();
  useScrollYPosition();
  useDisplaySections();

  return (
    <div className='bg-black'>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
