import React from 'react';
import ReactDOM from 'react-dom';
import './styles/common.less';
import AppRouter from './routes';
import { StateProvider } from './store';

ReactDOM.render(
  <StateProvider>
    <AppRouter />
  </StateProvider>,
  document.getElementById('root')
);
