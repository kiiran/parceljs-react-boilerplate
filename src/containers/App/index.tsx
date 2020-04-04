import React, { Suspense, lazy } from 'react'
import { Router } from '@reach/router'
import { ThemeProvider } from 'styled-components'
import LoadingSpinner from '~components/LoadingSpinner'
import theme from '~utils/theme'

// Lazy imports
const Hello = lazy(() => import('~components/Hello'))
const Goodbye = lazy(() => import('~components/Goodbye'))

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LoadingSpinner />}>
        <Router>
          <Hello path="/" />
          <Goodbye path="/bye" />
        </Router>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
