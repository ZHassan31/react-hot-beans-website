import React from 'react';
import ReactDOM from 'react-dom';
import CardFlex from './CardFlex.jsx';
import NavBar from './NavBar.jsx';

const year = new Date().getFullYear();

function App() {
  return (
    <div>
      <div>
        <p>Hot Beans {year} </p>
      </div>
      <NavBar />
    </div>

  );
}

export default App;
