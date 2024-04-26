import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/layout/Header';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Counter from './app/components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='text-white'>
    <Provider store={store}>
      <Header />
      <Counter/>
    </Provider>
  </div>
);


