import React from "react";
import { Pokemon } from "../pokemon/Pokemon";
import {Pagination} from '../pagination/Pagination';
import { Filter } from "../filter/Filter";

export const Results = (props) =>{
    const {pokemones,page,setPage,total,loading,onChange} = props;

    const lastPage = () =>{
        const nextPage = Math.max(page - 1,0);
        setPage(nextPage)
    }
    const nextPage = () => {
        const nextPage = Math.min(page + 1,total - 1);
        setPage(nextPage)
    }
return(
    <div>
        <div>
            <Filter 
            onChange={onChange}
            />
        </div>
        <div>
            <Pagination
            page={page+1}
            totalPages={total}
            onLeftClick={lastPage}
            onRightClick={nextPage}
            />
        </div>
        { loading ? (
            <div>Cargando pokemon...</div>
          ) : (
        <div>
    {pokemones.map(e => { 
        return(
            <Pokemon pokemon={e}/>
        )
    })}
    </div>
          )}
    </div>
)
};

