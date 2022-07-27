import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* -- Primary Meta Tags -- */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
