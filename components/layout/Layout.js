import { useDispatch, useSelector } from 'react-redux';

import Navbar from './navbar/Navbar';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Layout = props => {
  useWindowDimensions();

  // These can be removed - just for testing
  const width = useSelector(state => state.windowDimensions.width);
  const height = useSelector(state => state.windowDimensions.height);
  console.log(width);
  console.log(height);

  return (
    <div className='bg-black text-blue-500'>
      <Navbar />
      <main className=''>{props.children}</main>
    </div>
  );
};

export default Layout;
