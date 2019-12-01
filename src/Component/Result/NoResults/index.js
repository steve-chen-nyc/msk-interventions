import React from 'react';
import style from './style.module.css';

function NoResults({initialSearch, hasError}) {
  let message = '';

  if (hasError) {
    message = 'Oops something has gone wrong. Please try again.'
  } else if (initialSearch) {
    message = 'Search for interventions above.'
  } else {
    message = 'No Results';
  }

  return (
    <section className={style.container}>
      <h3>{message}</h3>
    </section>
  );
}

export default NoResults;
