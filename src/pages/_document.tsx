/* eslint-disable react/no-danger */
import { Head, Html, Main, NextScript } from "next/document";
import tailwindSetup from "../scripts/tailwindSetup";
import { defaultTheme } from "../config";

const script = {
  __html: tailwindSetup,
};

const MyDocument = (): JSX.Element => (
  <Html className={defaultTheme === "dark" ? "dark" : ""}>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <script type="text/javascript" dangerouslySetInnerHTML={script} />
    </Head>
    <body className="w-full bg-white font-serif dark:bg-black dark:text-white">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
