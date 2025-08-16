import React from 'react';

import { Link } from 'react-router-dom';

export default function Album() {
  return (
    <React.Fragment>
      <h1>Landing Page</h1>
      <p>Welcome to the Marketing App!</p>
      <p>Explore our features and pricing plans.</p>
      <p>Click the button below to view our pricing options.</p>
      <Link to="/pricing">
        <button
          variant="contained"
          color="primary"
        >
          Pricing
        </button>
      </Link>
    </React.Fragment>
  );
}
