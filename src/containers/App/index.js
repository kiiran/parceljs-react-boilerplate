import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import LoadingSpinner from 'components/LoadingSpinner';
import theme from 'utils/theme';

const Hello = React.lazy(() => import('components/Hello'));
const Goodbye = React.lazy(() => import('components/Goodbye'));

export default class App extends Component {
  render() {
    console.log(`App is rendering`, Date.now());

    return (
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<LoadingSpinner />}>
          <Hello />
          <Goodbye />
        </React.Suspense>
      </ThemeProvider>
    );
  }
}
