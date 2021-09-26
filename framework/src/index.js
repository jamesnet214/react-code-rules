import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PortalApp from './apps/portal/views/PortalApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
      <PortalApp/>
  </BrowserRouter>,
  document.getElementById('root')
);


