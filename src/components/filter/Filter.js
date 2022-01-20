import React from "react";

export const Filter = (props) => {
    const {onChange} = props;
    return (
        <div>
        <select onChange={onChange}>
            <option value='A_Z'>A-Z</option>
            <option value='Z_A'>Z-A</option>
            <option selected value='Asc_Id'>Asc Id</option>
            <option value='Des'>Des Id</option>
            <option value='Fuerza'>Fuerza</option>
        </select>
    </div>

    )
}