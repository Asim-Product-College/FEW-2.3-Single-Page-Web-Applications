import React from 'react';

function InventoryItem(props) {
    return (
        <div key={props.id} className="grid-item-display inventory-items">
        <p><strong>{props.name}</strong></p>
        <p>{props.price}</p>
        <p >{ props.description }</p>
      </div>      
    )
}
export default InventoryItem;