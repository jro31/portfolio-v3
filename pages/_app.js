// NICETOHAVE - Fix the 'Warning: findDOMNode is deprecated in StrictMode.' error from CSSTransitions
// TODO - Add a new 'About' section (between projects/contacts). This should be about me personally, somewhat resembling https://anniebombanie.com/#about
// TODO - Add a 'Principles' section, which lists my coding principles/philosophies, e.g: Responsive, mobile-first design built to work no matter the device or browser, clean code written to be easily understandable, maintainable, scalable and reusable etc?
// BUG - Scroll Snap (both of sections, and of projects) doesn't work in Firefox. Scrolling programatically or using keyboard works fine, but scrolling by mouse doesn't - Note this seems to be a bug with MacOS Monterrey https://bugzilla.mozilla.org/show_bug.cgi?id=1737820, https://bugzilla.mozilla.org/show_bug.cgi?id=1744289 so might not be fixable
// TODO - Update the 'home-screenshot' (that's used for the social media image). The homepage has been updated since it was taken.

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
