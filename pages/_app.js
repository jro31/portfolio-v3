// NICETOHAVE - Fix the 'Warning: findDOMNode is deprecated in StrictMode.' error from CSSTransitions
// BUG - Scroll Snap (both of sections, and of projects) doesn't work in Firefox. Scrolling programatically or using keyboard works fine, but scrolling by mouse doesn't - Note this seems to be a bug with MacOS Monterrey https://bugzilla.mozilla.org/show_bug.cgi?id=1737820, https://bugzilla.mozilla.org/show_bug.cgi?id=1744289 so might not be fixable
// TODO - Update the favicon

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
