// Next.js uses the App component to initialize pages. You can override it and control the page initialization. 
// I'm using this to add my context providers.
// https://nextjs.org/docs#custom-app

import React from 'react';
import App, { Container } from 'next/app';
import {FoodContextProvider} from '../context/FoodContext';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
        <FoodContextProvider>
            <Container>
                <Component {...pageProps} />
            </Container>
        </FoodContextProvider>
    );
  }
}

export default MyApp;