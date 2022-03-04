import Navbar from './navbar/Navbar';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Layout = props => {
  useWindowDimensions();

  return (
    <div className='bg-black text-blue-500'>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
