import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home/Home.tsx';
import GlobalStyle from './Styles/global.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
);
