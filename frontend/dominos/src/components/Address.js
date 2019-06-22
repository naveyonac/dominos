import React, { Component } from 'react';

class Address extends Component {
    render() {
        return (
            <div>
                <p>Next, we need some delivery information</p>
                <form className='addressForm'>
                    <div className='streetName'>
                        <input type='text' className='streetAddress' name='street_address' placeholder='Street address...'></input>
                    </div>
                    <div className='cityName'>
                        <input type='text' className='cityAddress' name='city_address' placeholder='City...'></input>
                    </div>
                    <div className='stateName'>
                        <input type='text' className='stateAddress' name='state_address' placeholder='State...'></input>
                    </div>
                    <div className='zipName'>
                        <input type='text' className='zipAddress' name='zip_address' placeholder='Zip code...'></input>
                    </div>

                </form>
            </div>
        );
    }
}

export default Address;