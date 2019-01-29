import React from 'react';
import './App.css';

function InventoryItem(props) {
    return (
        <div key={props.id}>
        <h1>{props.name}</h1>
        <p>{props.price}</p>
      </div>      
    )
}
export default InventoryItem;