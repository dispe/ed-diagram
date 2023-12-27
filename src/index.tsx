import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons

import './index.css';

import Layout from './components/layout/Layout';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Layout />
  </StrictMode>
);
