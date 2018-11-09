import React, { Component } from 'react';

class ItemQuantity extends React.Component {
    render() {
        return (
            <form className="items__form">
                <label>
                    <button className='decrement' >-</button>
                    {/* <input className='input-bar' type='number' name='quantity' autoComplete='off' >{this.props.quantity}</input> */}
                    <span className="input-bar" className="input-span">{this.props.quantity}</span>
                    <button className='increment'>+</button>
                </label>
            </form>
        );
    }
}

export default ItemQuantity;