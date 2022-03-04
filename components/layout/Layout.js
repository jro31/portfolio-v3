import Navbar from './navbar/Navbar';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useScrollYPosition from '../../hooks/useScrollYPosition';

const Layout = props => {
  useWindowDimensions();
  useScrollYPosition();

  return (
    <div className='bg-black text-blue-500'>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
