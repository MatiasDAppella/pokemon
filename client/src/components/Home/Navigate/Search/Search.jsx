// Styles
import style from './Search.module.less';

// Hooks
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getSearch, removeErrorMessage, addErrorMessage } from '../../../../redux/actions';

// Components
import Message from '../../../Message/Message';

const Search = () => {
  const dispatch = useDispatch()
  const error = useSelector(state => state.error)
  const [input, setInput] = useState("")

  // no search found
  useEffect(() => {
    if (error !== "" && error !== "Searching...") setTimeout(() => {
      dispatch(removeErrorMessage())
    }, 3000)
  }, [error])

  const handleChange = (event) => {
    setInput(event.target.value.toLowerCase())
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") handleSearch()
  };

  const handleSearch = () => {
    if (!input) return
    dispatch(addErrorMessage("Searching..."))
    dispatch(getSearch(input))
    setInput("")
  };

  return <div className={style.search}>
    {(error) && <Message text={error}/>}
    <div className={style.searchBox}>
      <button className={style.btn} onClick={handleSearch}>Search</button>
      <input onKeyPress={handleKeyPress} type="text" value={input} onChange={handleChange}/>
    </div>
    <div className={style.separator}/>
  </div>
};

export default Search;