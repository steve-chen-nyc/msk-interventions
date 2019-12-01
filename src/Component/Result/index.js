import React from 'react';
import classNames from 'classnames';
import style from './style.module.css';
import NoResults from './NoResults';
import ResultItem from './ResultItem';

function Result({ results, currentSearch, previousSearch, initialSearch, hasError }) {
  return (
    <>
      { previousSearch && (
        <div className={style.title}>
          <h3>Current Search: {previousSearch}</h3>
        </div>
      )}
      <div className={classNames(
        {
          [style.container]: results && results.length,
          [style.noResults]: !results || !results.length,
        })}>
        {results && results.length ? (
          results.map((term, idx) => (
            <ResultItem
              key={idx}
              category={term.category}
              name={term.name}
              codes={term.codes}
            />)
          )
        ) : (
          <NoResults
            initialSearch={initialSearch}
            hasError={hasError}
          />
        )}
      </div>
    </>
  );
}

export default Result;
