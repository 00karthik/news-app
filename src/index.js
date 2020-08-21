import React from 'react';
import ReactDOM from 'react-dom';
import './common.less';
import AppRouter from './routes';
import { StateProvider } from './store';

ReactDOM.render(
  <StateProvider>
    <AppRouter />
  </StateProvider>,
  document.getElementById('root')
);
