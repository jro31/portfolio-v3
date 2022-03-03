import Navbar from './navbar/Navbar';

const Layout = props => {
  return (
    <div className='bg-slate-500 mt-navbar-height text-white'>
      <Navbar />
      <main className='min-h-[calc(100vh_-_theme(space.navbar-height))]'>{props.children}</main>
    </div>
  );
};

export default Layout;
