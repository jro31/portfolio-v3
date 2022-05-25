// NICETOHAVE - Fix the 'Warning: findDOMNode is deprecated in StrictMode.' error from CSSTransitions
// TODO - Add a new 'About' section (between projects/contacts). This should be about me personally, somewhat resembling https://anniebombanie.com/#about
// TODO - Add a 'Principles' section, which lists my coding principles/philosophies, e.g: Responsive, mobile-first design built to work no matter the device or browser, clean code written to be easily understandable, maintainable, scalable and reusable etc?
// BUG - Scroll Snap (both of sections, and of projects) doesn't work in Firefox. Scrolling programatically or using keyboard works fine, but scrolling by mouse doesn't - Note this seems to be a bug with MacOS Monterrey https://bugzilla.mozilla.org/show_bug.cgi?id=1737820, https://bugzilla.mozilla.org/show_bug.cgi?id=1744289 so might not be fixable
// FIXME - The app looks atrocious on an iPad pro in portrait mode. The screen is wide enough that is uses screen-height sections, but is so tall that it stretches all elements out way too much - Perhaps remove screen-height sections if the screen is over a certain height.

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
