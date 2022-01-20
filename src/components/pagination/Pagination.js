import React from "react";


export const Pagination = (props) => {
    const {page , totalPages , onLeftClick, onRightClick}=props;
return (
    <div>
        <div>
        <button onClick={onLeftClick}>Left</button>
        <div>{page} to {totalPages}</div>
        <button onClick={onRightClick}>Right</button>
        </div>
    
    </div>

)
}


