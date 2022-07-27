import type {AppProps} from 'next/app';
import App, {AppContext} from 'next/app';
import Head from 'next/head';

import Layout from '../layout/Layout';
import '~styles/globals.css';
import {Provider as UserProvider} from '~user/context';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  if (appContext.ctx.res?.statusCode === 404) {
    appContext.ctx.res.writeHead(302, {Location: '/'});
    appContext.ctx.res.end();

    return;
  }

  return {...appProps};
};

export default MyApp;
