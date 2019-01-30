import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import CategoryBtn from './CategoryBtn';
import InventoryItem from './InventoryItem';

class App extends Component {

  constructor(props) {
    super(props)
    // this.handleCategoryBtnClick = this.handleCategoryBtnClick.bind(this)
    this.state = {
      currentCategory : null
    }
    this.handleCategoryBtnClick = this.handleCategoryBtnClick.bind(this);
  }

  handleCategoryBtnClick(label) {    
    this.setState({ currentCategory: label });
  }

  getCategories() {
    // it'll pass the item into this func and return the catargoy 
    // cat: arr of str's
    // map takes the cat as a funtion, maps/transforms each item and returns it
    // if you put the stuff on one line the inner return is implied.
    return categories.map(
      (cat) =>
      <li key={cat}>
        <CategoryBtn
          label = {cat}
          handleCategoryBtnClick = {this.handleCategoryBtnClick}
        />
      </li>
    );
  }

  getInventory() {
    return inventory.filter((item) => {
      return item.category === this.state.currentCategory || this.state.currentCategory === null
    }).map(( { id, name, price, description } ) =>
      <InventoryItem
          key = { id }
          name = { name }
          price = { price }
          description = { description } 
      />
    )
  }

  getDisplayBtn() {
    // experiencing bug here
    return <button onClick={this.handleCategoryBtnClick(null)} className="btn waves-effect waves-light">Display All Items</button>
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Asims Product Store</h1>
        <p>Current Category: { this.state.currentCategory }</p>

        <ul className="grid-item-display">
          { this.getCategories() }
        </ul>

        <p>Current Category: { this.state.currentCategory || "All Products" }</p>
        { this.getDisplayBtn() }
        {/* <button onClick={ this.handleCategoryBtnClick } className="btn waves-effect waves-light">Display All Products</button> */}
        <div className="inventory-container">
        {this.getInventory()}
        </div>

      </div>
    );
  }
}

export default App;
