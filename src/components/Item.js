import React, { Component } from 'react';
import ItemQuantity from './ItemQuantity.js';

const Items = (props) => {
    return (
        <div className="items">

            <div className="items__number">{props.partNumber}</div>
            <div className="items__title">{props.title}</div>

            <ItemQuantity quantity={props.quantity} />
        </div>

    )
}

export default Items;