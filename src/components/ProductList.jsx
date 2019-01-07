import React, { Component } from 'react';
import { store } from './../store';

class ProductList extends Component {
    constructor() {
        super();
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart = product => {
        store.dispatch({ type: 'ADD_TO_CART', product });
    }

    render() {
        const { aProducts } = this.props;
        return (
            <div>    
                <h2>Product List</h2>
                <ul>
                {
                    aProducts.map(product => <button onClick={() => this.addToCart(product)} key={product}>{ product }</button>)
                }
                </ul>
            </div>
        );
    }
}  

export default ProductList;