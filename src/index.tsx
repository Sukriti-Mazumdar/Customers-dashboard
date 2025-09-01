import React from 'react';
import ReactDOM from 'react-dom/client';
import TaxFilingApp from './CustomerDashboard/TaxFilingsApp';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <TaxFilingApp />
  </React.StrictMode>
);