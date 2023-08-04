// Styles
import style from './Search.module.less';

const SearchBar = () => {
  return <div className={style.searchBar}>
    <input type="text"/>
    <button>Search</button>
  </div>
};

export default SearchBar;