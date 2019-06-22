import React from 'react';
import './App.css';
import Customer from './components/Customer'
import Address from './components/Address'

function App() {
  return (
    <div className="App">
      <div className='placeOrder'>
      <p>Lets order some Dominos!!!🍕</p>
      <Customer></Customer>
      <Address></Address>
      </div>
    </div>
  );
}

export default App;
