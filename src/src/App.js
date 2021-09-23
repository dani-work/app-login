import React from 'react'
import { AuthInit } from './components/Login/AuthInit';
import { AppRouter } from "./router";

const App = () => {
  return (
    <AuthInit>
      <AppRouter />
    </AuthInit>
  );
}

export default App;
