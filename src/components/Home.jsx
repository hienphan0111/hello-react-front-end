import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Random message app</h1>
      <span>
        <Link to="/message">Click here to see random message</Link>
      </span>
    </div>
  );
}

export default Home;
