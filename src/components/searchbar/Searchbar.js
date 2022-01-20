import React from "react";
import { useState } from "react";


export const Searchbar = (props) => {
    const {onSearch} = props;
    const [search,setSearch]=useState('');
   

    const onChange = (e) =>{
        setSearch(e.target.value);
        // if(e.target.value.length === 0){
        //     onSearch(null);
        // }
    }

    const onClick = async (e) =>{
        onSearch(search);
    }
    return (
        <div>
            <input placeholder='Search Pokemon...' onChange={onChange}></input>
            <button onClick={onClick}>Search</button>
        </div>
    )
}