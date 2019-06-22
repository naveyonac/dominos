import React from 'react';
import './App.css';
import Customer from './components/Customer'
import Address from './components/Address'
import Menu from './components/Menu'
import Payment from './components/Payment'

function App() {
  return (
    <div className="App">
      <div className='placeOrder'>
      <p>Lets order some Dominos!!!🍕</p>
      <form className='pizzaForm'>
        <Customer></Customer>
        <Address></Address>
        <Menu></Menu>
        <Payment></Payment>
        <input type='submit' value='Place order'></input>
      </form>
      </div>
    </div>
  );
}

export default App;
