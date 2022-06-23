import React from 'react';
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import LandingPage from './app/containers/LandingPage/loadable'
import HomePage from './app/containers/Homepage/loadable';

import GlobalStyles from './app/config/GlobalStyles'
import { setTheme } from './app/utils/modeUtil'

function App() {

  const currentTheme = useSelector(state => state.mode.theme)

  return (
    <ThemeProvider theme={setTheme(currentTheme)}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
