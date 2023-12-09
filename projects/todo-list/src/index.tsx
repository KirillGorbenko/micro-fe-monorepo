import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root element not found');
}

const container = createRoot(root);

container.render(<App />);