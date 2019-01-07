import React, { Component } from 'react';
import { connect } from 'react-redux';

const aProducts = ["Item 1", "Item 2", "Item 3"];

class App extends Component {
  render() {
    const { cart, handleItem } = this.props;
    const shoppingList = cart.cart;
    console.log(shoppingList);
    return (
        <div>
          <ul>
            <h2>Product List</h2>
            {
              aProducts.map(product => <button onClick={() => handleItem(product)} key={product}>{ product }</button>)
            }
          </ul>
          <ul>
            <h2>Shopping cart</h2>
            {
              shoppingList ? shoppingList.map(
                (product, index) => <li key={product + index}>{ index } -  { product }</li>) : 'select a product'
            }
          </ul>
        </div>
      );
  }
}

const mapDispatchToProps = dispatch => ({
  handleItem: (product) => dispatch({ type: 'ADD_TO_CART', product })
});

const mapStateToProps = state => ({
  cart: state
})

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnected;
