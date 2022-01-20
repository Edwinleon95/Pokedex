import './App.css';
import { Searchbar } from './components/searchbar/Searchbar';
import { Results } from './components/results/Results';
import {getPokemons,getPokemonData, searchPokemon} from './actions/Action';
import {useState,useEffect} from 'react';


export default function App() {
  const [pokemons,setPokemons]=useState([]);
  const [page,setPage]=useState(0);
  const [total,setTotal]=useState();
  const [loading,setLoading]=useState(true);
  const [notFound , setNotFound]=useState(false);
  const [searching,setSearching]=useState(false);

  const fetchPokemons = async (e) =>{
    try{
      setLoading(true);
      const data = await getPokemons(9,9*page);
      const promise = data.data.results.map(async (e)=>{
        return await getPokemonData(e.url)
      })
      const results = await Promise.all(promise)
      if (e){
        if(e.target.value=== 'Des'){
          let newSortedList = [...results].sort((b, a) =>
              a.data.id > b.data.id ? 1 : a.data.id < b.data.id ? -1 : 0
              );
              setPokemons(newSortedList);
        }
        if(e.target.value=== 'Asc_Id'){
          let newSortedList = [...results].sort((b, a) =>
              a.data.id < b.data.id ? 1 : a.data.id > b.data.id ? -1 : 0
              );
              setPokemons(newSortedList);
        }
        if(e.target.value==='A_Z'){
          results.sort((b, a) =>
              a.data.name < b.data.name ? 1 : a.data.name > b.data.name ? -1 : 0
            );
            setPokemons(results);
        }
        if(e.target.value==='Z_A'){
          let newSortedList = [...results].sort((b, a) =>
              a.data.name > b.data.name ? 1 : a.data.name < b.data.name ? -1 : 0
            );
            setPokemons(newSortedList);
        }
        if(e.target.value==='Fuerza'){
          let newSortedList = [...results].sort((b, a) =>
              a.data.stats[1].base_stat > b.data.stats[1].base_stat ? 1 : a.data.stats[1].base_stat < b.data.stats[1].base_stat ? -1 : 0
            );
            setPokemons(newSortedList);
        }
        setPokemons(results);
        setLoading(false);
        return
      }
      setPokemons(results);
      setLoading(false);
      
      setTotal(Math.ceil(data.data.count / 9));
      setNotFound(false);
    }catch(err){}
   
  }
  const onSearch = async (pokemon) => {
    if (!pokemon){
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result){
      setNotFound(true);
      setLoading(false);
      return;
    }else{
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  }

  useEffect(() => {
    if(!searching){
      fetchPokemons();
    }
  },[page])

  // const onChange = (e) => {
  //   if(e.target.value=== 'Des'){
  //     let newSortedList = [...pokemons].sort((b, a) =>
  //         a.data.id > b.data.id ? 1 : a.data.id < b.data.id ? -1 : 0
  //         );
  //         setPokemons(newSortedList);
  //   }
  //   if(e.target.value=== 'Asc_Id'){
  //     let newSortedList = [...pokemons].sort((b, a) =>
  //         a.data.id < b.data.id ? 1 : a.data.id > b.data.id ? -1 : 0
  //         );
  //         setPokemons(newSortedList);
  //   }
  //   if(e.target.value==='A_Z'){
  //     let newSortedList = [...pokemons].sort((b, a) =>
  //         a.data.name < b.data.name ? 1 : a.data.name > b.data.name ? -1 : 0
  //       );
  //       setPokemons(newSortedList);
  //   }
  //   if(e.target.value==='Z_A'){
  //     let newSortedList = [...pokemons].sort((b, a) =>
  //         a.data.name > b.data.name ? 1 : a.data.name < b.data.name ? -1 : 0
  //       );
  //       setPokemons(newSortedList);
  //   }
  //   if(e.target.value==='Fuerza'){
  //     let newSortedList = [...pokemons].sort((b, a) =>
  //         a.data.stats[1].base_stat > b.data.stats[1].base_stat ? 1 : a.data.stats[1].base_stat < b.data.stats[1].base_stat ? -1 : 0
  //       );
  //       setPokemons(newSortedList);
  //   }
  // }
  return (
    <div className="App">
          <h1>POKEDEX</h1>
          <Searchbar onSearch={onSearch}/>
          {notFound ? (
            <div>No se encontro el Pokemon</div>
          ) : (
            <Results 
            onChange={fetchPokemons}
            loading = {loading}
            pokemones={pokemons}
            page={page}
            setPage={setPage}
            total={total}/> 
            )}   
    </div>
  );
}


