import React from 'react';
import './App.css';
import Products from './components/Products.component';

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Welcome to my cool react App ^_^!</h1>
      </header>
      <section>
        <Products />
      </section>
    </div>
  );
}

export default App;
