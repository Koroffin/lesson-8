import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NumericInput } from './components/NumericInput';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App buttonsCount={7} />
  </React.StrictMode>
);
