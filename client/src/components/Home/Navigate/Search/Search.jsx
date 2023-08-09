// Styles
import style from './Search.module.less';

// Hooks
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getSearch } from '../../../../redux/actions';

const Search = () => {
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

  return <div className={style.search}>
    <div className={style.searchBox}>
      <button className={style.btn} onClick={handleSearch}>Search</button>
      <input type="text" value={input} onChange={handleChange}/>
    </div>
    <div className={style.separator}/>
  </div>
};

export default Search;