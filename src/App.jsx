import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCard from './components/ShoppingCard';
import ProductList from './components/ProductList';

const aProducts = ["Item 1", "Item 2", "Item 3"];

class App extends Component {
  render() {
    return (
        <div>
            <ProductList aProducts={aProducts}/>
            <ShoppingCard/>
        </div>
      );
  }
}
export default App;
