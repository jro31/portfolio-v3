import { Fragment } from 'react';
import Head from 'next/head';

import Introduction from '../components/homepage-sections/introduction/Introduction';
import Tools from '../components/homepage-sections/tools/Tools';
import Projects from '../components/homepage-sections/projects/Projects';

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        {/* TODO - Update this */}
        <title>Jethro Williams - Software Engineer</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <Introduction />
      <Tools />
      <Projects />
    </Fragment>
  );
};

export default HomePage;
