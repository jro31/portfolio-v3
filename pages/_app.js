// TODO - Update readme
// TODO - Fix the 'Warning: findDOMNode is deprecated in StrictMode.' error from CSSTransitions
// TODO - Host at jethrowilliams.com
// TODO - Remove 'mountOnEnter' from CSS transitions wherever possible (remove it breaks some features, but having it will make any elements invisible to search engines)

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
