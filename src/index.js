import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import Middleware from './middleware/middleware';
import Navbar from './components/navbar/Navbar';
import Routing from './middleware/router';
import { ThemeProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Middleware>
          <Navbar />
          <Routing />
        </Middleware>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
