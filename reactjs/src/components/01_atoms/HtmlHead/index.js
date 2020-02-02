import React from "react";
import Head from "next/head";
import { ServerStyleSheet } from "styled-components";

const HtmlHead = ({ styleTags }) => (
  <Head>
    <title>SystemSeed&apos;s Decoupled boilerplate</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <link
      rel="shortcut icon"
      href="/static/favicon.ico"
      type="image/vnd.microsoft.icon"
    />
    {styleTags}
  </Head>
);

HtmlHead.getInitialProps = ({ renderPage }) => {
  const sheet = new ServerStyleSheet();
  const page = renderPage(App => props =>
    sheet.collectStyles(<App {...props} />)
  );

  const styleTags = sheet.getStyleElement();

  return { ...page, styleTags };
};

export default HtmlHead;
