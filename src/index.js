import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'modern-normalize';
import { Global } from 'styles/global.styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <App />
    <Global/>
  </>
)
