import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portal from './apps/portal/views/portal.app';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
      <Portal/>
  </BrowserRouter>,
  document.getElementById('root')
);
