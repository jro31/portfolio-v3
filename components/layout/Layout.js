import Navbar from './navbar/Navbar';

const Layout = props => {
  return (
    <div className='bg-slate-500 mt-navbar-height text-white'>
      <Navbar />
      <main className='min-h-screen-minus-nav'>{props.children}</main>
    </div>
  );
};

export default Layout;
