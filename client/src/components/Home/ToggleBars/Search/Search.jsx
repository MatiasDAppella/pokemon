// Styles
import style from './Search.module.less';

// Hooks
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions & functions
import { getSearch } from '../../../../redux/actions';
import { validateState } from './validate';

const SearchBar = () => {
  const dispath = useDispatch()
  const actualPokemons = useSelector(state => state.pokemons)
  const [input, setInput] = useState("")

  const handleChange = (event) => {
    setInput(event.target.value.toLowerCase())
  };

  const handleSearch = () => {
    if (!input) return
    // const action = validateState(actualPokemons)
    // console.log(action)
    dispath(getSearch(input))
    setInput("")
  };

  return <div className={style.searchBar}>
    <input name="inputsearch" type="text" value={input} onChange={handleChange}/>
    <button onClick={handleSearch}>Search</button>
  </div>
};

export default SearchBar;