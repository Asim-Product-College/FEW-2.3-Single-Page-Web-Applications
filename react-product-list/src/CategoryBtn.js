import React from 'react';
import './App.css';

function CategoryBtn(props) {
    return (
        <button onClick="handleButtonClick()">{ props.label }</button>        
    )
}
export default CategoryBtn;


// class CatBtn extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         <button>{cat}</button>
//     }
// };

