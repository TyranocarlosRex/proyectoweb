import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';        // o './app/store' si lo tienes en src/app/store.js
import Home from './paginas/home';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
