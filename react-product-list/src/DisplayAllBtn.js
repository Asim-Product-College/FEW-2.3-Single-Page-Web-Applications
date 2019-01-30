import React from 'react';

function DisplayAllBtn(props) {
    return (
        <button
            className="category-btn btn waves-effect waves-light"
            onClick={() => props.handleCategoryBtnClick(null)} >
            Show All
        </button>
    )
}
export default DisplayAllBtn;
