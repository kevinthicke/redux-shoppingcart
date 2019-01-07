import React, { Component } from 'react';
import { store } from './../store';

class ShoppingCard extends Component {
    constructor() {
        super();
        this.state = { shoppingList: [] };

    store.subscribe( () => {
        this.setState({ shoppingList: store.getState().cart });
    });

    }
    render() {
        const { shoppingList } = this.state;
        return (
            <div> 
                <h2>Shopping cart</h2>
                {
                shoppingList ? shoppingList.map(
                    (product, index) => <li key={product + index}>{ index } -  { product }</li>) : 'select a product'
                } 
            </div>
        );
    }
}

export default ShoppingCard;