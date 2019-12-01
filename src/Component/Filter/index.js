import React from 'react';
import style from './style.module.css';

function Filter({ categories, handleChange, currentCategory }) {
  if (!categories.length) return null;

  const options = categories.map((category, idx) => {
    return <option key={idx} value={category}>{category}</option>;
  });

  return (
    <div className={style.container}>
      <select
        className={style.categorySelect}
        onChange={handleChange}
        value={currentCategory}
      >
        <option value=''>All categories</option>
        {options}
      </select>
    </div>
  );
}

export default Filter;
