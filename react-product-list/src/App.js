import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import CategoryBtn from './CategoryBtn';
import InventoryItem from './InventoryItem';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentCategory : null
    }
  }

  handleButtonClick() {
    this.setState({ currentCategory: newCategory })
  }

  getCategories() {
    // it'll pass the item into this func and return the catargoy 
    // cat: arr of str's
    // map takes the cat as a funtion, maps/transforms each item and returns it
    // if you put the stuff on one line the inner return is implied.
    return categories.map((cat) => <li key={cat}><CategoryBtn label={cat}/></li>);
  }

  getInventory() {
    return inventory.map(({id, name, price} ) =>
      <InventoryItem key={id} name={name} price={price}/>
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Show products here</h1>
        <p>Current Category: {this.state.currentCategory}</p>

        <ul>
          {this.getCategories()}
        </ul>

        <div>
        {this.getInventory()}
        </div>

      </div>
    );
  }
}

export default App;
