import React from 'react';
import style from './style.module.css';

function ResultItem({ name, category, codes }) {
  const renderCodes = () => codes.map((code, idx) => <li key={idx}>{code}</li>)

  return (
    <div className={style.container}>
      <h3>{name}</h3>
      <h5>Category: {category}</h5>
      <div>
        <h5>Codes</h5>
        <ul>{renderCodes()}</ul>
      </div>
    </div>
  );
}

export default ResultItem;
