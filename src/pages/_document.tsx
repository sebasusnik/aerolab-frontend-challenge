import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* -- Primary Meta Tags -- */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* -- Google Fonts -- */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link crossOrigin="true" rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;900&display=swap"
          rel="stylesheet"
        />
        {/* -- Open Graph / Facebook -- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aerolab-frontend-challenge-theta.vercel.app" />
        <meta property="og:title" content="Aerolab - DEVELOPER CHALLENGE" />
        <meta
          property="og:description"
          content="This is my resolution of the aerolab frontend developer challenge. If you like my work please contact me as /sebasusnik en linkedin or github."
        />
        <meta property="og:image" content="/illustrations/Metadata.png" />

        {/* -- Twitter -- */}
        <meta property="twitter:card" content="/illustrations/Metadata.png" />
        <meta
          property="twitter:url"
          content="https://aerolab-frontend-challenge-theta.vercel.app"
        />
        <meta property="twitter:title" content="Aerolab - DEVELOPER CHALLENGE" />
        <meta
          property="twitter:description"
          content="This is my resolution of the aerolab frontend developer challenge. If you like my work please contact me as /sebasusnik en linkedin or github."
        />
        <meta property="twitter:image" content="/illustrations/Metadata.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
