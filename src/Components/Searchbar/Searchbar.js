import { useState } from 'react';
import style from './Searchbar.module.css'

export default function Searchbar({onSubmit}) {
    const [query, setQuery] = useState('');

    const handleChange = e => {
    setQuery(e.currentTarget.value);
  };
console.log()
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };
    return (
    <div className={style.Searchbar}>
      <form onSubmit={handleSubmit} className={style.SearchForm}>
        <input
          
          value={query}
          onChange={handleChange}
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search movies"
           className={style.SearchFormInput} 
        />

        <button type="submit" className={style.SearchFormButton}/>
          
        
      </form>
    </div>
  );
}