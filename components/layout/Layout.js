import Navbar from './navbar/Navbar';

const Layout = props => {
  return (
    <div className='bg-black text-blue-500'>
      <Navbar />
      <main className=''>{props.children}</main>
    </div>
  );
};

export default Layout;
