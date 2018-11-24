import React, { Component } from 'react';

class ItemQuantity extends Component {
    state = {
        quantity: 0
    }
    constructor(props) {
        super(props);

        this.decrementClick = this.decrementClick.bind(this)
        this.incrementClick = this.incrementClick.bind(this)
        this.onQuantityInput = this.onQuantityInput.bind(this)

    }



    decrementClick = (e) => {
        e.preventDefault();

        this.setState({
            quantity: this.state.quantity - 1
        });
    }

    incrementClick = (e) => {
        e.preventDefault();
        this.setState({
            quantity: this.state.quantity + 1
        });

    }
    onQuantityInput = (e) => {
        let val = parseInt(e.target.value);
        if (isNaN(val)) {
            val = 0;
        }
        this.setState({
            quantity: val
        })
    }

    render() {
        return (
            <form className="items__form">

                <button className='decrement' onClick={this.decrementClick} >-</button>

                <input className="input-bar" onFocus='select' className="input-span" type='number' value={this.state.quantity} autoComplete='off' onChange={this.onQuantityInput} />

                <button className='increment' onClick={this.incrementClick}>+</button>

            </form>
        );
    }
}

export default ItemQuantity;