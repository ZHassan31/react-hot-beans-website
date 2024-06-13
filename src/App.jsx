import React from 'react';
import ReactDOM from 'react-dom';
import CardFlex from './CardFlex.jsx';

const year = new Date().getFullYear();

function App() {
  return (
    <div>
      <div>
        <p>Hot Beans {year} </p>
      </div>
      <CardFlex/>
    </div>
    
  );
}

export default App;
