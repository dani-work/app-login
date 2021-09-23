import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AuthInit } from './components/Login/AuthInit';
import { AppRouter } from "./router";

const App = () => {

  return (
    <Provider store={store}>
      <AuthInit>
        <AppRouter />
      </AuthInit>
    </Provider>
  );
}

export default App;
