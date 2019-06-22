import React, { Component } from 'react';

class customer extends Component {
    render() {
        return (
            <div className='custName'>
            <p>Firstly, we will need some customer information</p>
                <form className='customerForm'>
                    <div className='firstName'>
                        <input type='text' className='fName' name='first_name' placeholder='First name...'></input>
                    </div>
                    <div className='lastName'>
                        <input type='text' className='lName' name='last_name' placeholder='Last name...'></input>
                    </div>
                    <div className='emailAddress'>
                        <input type='text' className='eAddress' name='email_address' placeholder='Email...'></input>
                    </div>
                    <div className='phoneNumber'>
                        <input type='text' className='pNumber' name='phone_number' placeholder='Phone Number...'></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default customer;