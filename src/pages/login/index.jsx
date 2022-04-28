import React, { useState } from 'react';
import HeaderComponent from '../../components/header';
import FilterCategory from '../../components/filterCategory';
import CardData from '../../components/CardData';

export function App() {
  const [count, setCount] = useState(1);
  return (
    <div className="App">
      <HeaderComponent />
      <FilterCategory />
      <CardData />
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {' | '}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>

    </div>
  );
}
