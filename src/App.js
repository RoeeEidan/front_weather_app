import React from 'react';
import { Home } from './components';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Home />
    </MuiThemeProvider>
  </Provider>
);

export default App;
