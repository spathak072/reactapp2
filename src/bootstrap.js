import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Keep track of created roots
const roots = new Map();

const mount = (el) => {
  let root = roots.get(el);

  if (!root) {
    // createRoot only once per container
    root = ReactDOM.createRoot(el);
    roots.set(el, root);
  }

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  reportWebVitals();
};



export { mount };


