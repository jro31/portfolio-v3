// ESSENTIAL - Update readme
// TODO - Fix the 'Warning: findDOMNode is deprecated in StrictMode.' error from CSSTransitions
// ESSENTIAL - Host at jethrowilliams.com
// ESSENTIAL - Remove 'mountOnEnter' from CSS transitions wherever possible (remove it breaks some features, but having it will make any elements invisible to search engines)
// TODO - Add a new 'About' section (between projects/contacts). This should be about me personally, somewhat resembling https://anniebombanie.com/#about
// TODO - Add a 'Principles' section, which lists my coding principles/philosophies, e.g: Responsive, mobile-first design built to work no matter the device or browser, clean code written to be easily understandable, maintainable, scalable and reusable etc?

import { Provider } from 'react-redux';
import Layout from '../components/layout/Layout';

import store from '../store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
