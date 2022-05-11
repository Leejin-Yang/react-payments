import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';

import { PageContextProvider } from 'contexts/PageContext';
import appStyles from 'styles/app';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={appStyles} />
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </React.StrictMode>,
);
