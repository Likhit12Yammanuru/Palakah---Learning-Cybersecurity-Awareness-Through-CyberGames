import React from 'react';
import ReactDOM from 'react-dom/client'; // Using React 18's new root API
import './index.css';  // Importing global CSS
import App from './App';

// Create a root element to render the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
