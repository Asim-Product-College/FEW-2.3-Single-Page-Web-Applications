import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import CategoryBtn from './CategoryBtn';
import InventoryItem from './InventoryItem';
import DisplayAllBtn from './DisplayAllBtn';

class App extends Component {

  constructor(props) {
    super(props)
    // this.handleCategoryBtnClick = this.handleCategoryBtnClick.bind(this)
    this.state = {
      currentCategory : null,
    }
    this.handleCategoryBtnClick = this.handleCategoryBtnClick.bind(this);
  }

  calculateTotalPrice() {
    let totalPrice = inventory.filter((item) => {
      return item.category === this.state.currentCategory || this.state.currentCategory === null
    }).reduce((acc, item) => {
        acc += Number(item.price);
        // totalPrice = Math.Floor(totalPrice)
        // acc = Math.Floor(acc)
        return acc;
    }, 0)
    
    return <h1>{totalPrice}</h1>
    // Array.reduce((acc, item, i, arr)=>{}, init)
  }

  handleCategoryBtnClick(label) {    
    this.setState({ currentCategory: label });
  }

  getCategories() {
    // it'll pass the item into this func and return the catargory 
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
    // let currTotal = 0;
    const item = inventory.filter((item) => {
      return item.category === this.state.currentCategory || this.state.currentCategory === null
    }).map(( { id, name, price, description } ) =>
        <InventoryItem
          key = { id }
          name = { name }
          price = { price }
          description = { description }
        />
    )
    // for (var i = 0; i < item.length; i++) {
    //   // console.log("item:", item[i].props.price);
    //   currTotal += parseFloat(item[i].props.price)
    // }
    // this.setState({ total: currTotal })
    // console.log("total:", this.state.total);
    
    // console.log("currTotal:", currTotal);
    

    // total += {price}
    return item
  }

  getDisplayBtn() {
    // experiencing bug here
    return <DisplayAllBtn
        handleCategoryBtnClick = {this.handleCategoryBtnClick}
    />
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Asims Product Store</h1>
        <p>Current Category: { this.state.currentCategory }</p>

        <ul className="grid-display eight-gi">
          { this.getCategories() }
        </ul>

        <p>Current Category: { this.state.currentCategory || "All Products" }</p>
        <h4>Sum of all prices: </h4>
        {this.calculateTotalPrice()}
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
