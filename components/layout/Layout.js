import Navbar from './navbar/Navbar';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useScrollYPosition from '../../hooks/useScrollYPosition';
import useDisplaySections from '../../hooks/useDisplaySections';
import useElementIsInView from '../../hooks/useElementIsInView';

const Layout = props => {
  useWindowDimensions();
  useScrollYPosition();
  useDisplaySections();
  useElementIsInView();

  return (
    <div className='bg-black'>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
