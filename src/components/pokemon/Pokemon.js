import React from "react";


export const Pokemon = (props) =>{
    const {pokemon} = props;
    return(
        <div>
            <div>{pokemon.data.name}</div>
            <img src={pokemon.data.sprites.front_default}/>
            <div></div>
        </div>
        
    )

};