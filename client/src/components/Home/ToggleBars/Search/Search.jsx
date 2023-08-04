// Styles
import style from './Search.module.less';

// Hooks
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { getSearch } from '../../../../redux/actions';

const SearchBar = () => {
  const dispath = useDispatch()
  const [input, setInput] = useState("")

  const handleChange = (event) => {
    setInput(event.target.value.toLowerCase())
  };

  const handleSearch = () => {
    if (!input) return
    dispath(getSearch(input))
    setInput("")
  };

  return <div className={style.searchBar}>
    <input name="inputsearch" type="text" value={input} onChange={handleChange}/>
    <button onClick={handleSearch}>Search</button>
  </div>
};

export default SearchBar;