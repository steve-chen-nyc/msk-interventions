import React from 'react';
import style from './style.module.css';

function Search({ placeholder, value, onChange, onSubmit }) {

  return (
    <form className={style.container} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        className={style.input}
        value={value}
        onChange={onChange}
      />
      <button
        className={style.button}
        onClick={onSubmit}
      >
      Search
      </button>
    </form>
  );
}

export default Search;
