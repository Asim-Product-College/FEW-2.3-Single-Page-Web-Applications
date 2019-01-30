import React from 'react';

function CategoryBtn(props ) {
    // console.log("handleCategoryBtnClick:", handleCategoryBtnClick);
    
    const label = props.label;
    return (
        <button
            className="category-btn btn waves-effect waves-light"
            onClick={() => props.handleCategoryBtnClick(label)} >
            { label }
        </button>
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

