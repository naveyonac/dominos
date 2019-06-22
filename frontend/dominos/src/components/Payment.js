import React, { Component } from 'react';

class Payment extends Component {
    render() {
        return (
            <div>
                <p>Lastly, we just need some payment information from you</p>
                <form className='paymentForm'>
                    <div className='cc_num'>
                        <input type='text' className='ccNum' name='card_number' placeholder='CC Number...'></input>
                    </div>
                    <div className='cc_exp'>
                        <input type='text' className='ccExp' name='card_expiration' placeholder='Card expiration...'></input>
                    </div>
                    <div className='cc_key'>
                        <input type='text' className='ccKey' name='card_sec_key' placeholder='CC security key...'></input>
                    </div>
                    <div className='cc_zip'>
                        <input type='text' className='ccZip' name='card_zip' placeholder='Card zipcode...'></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Payment;