import React from 'react';
import { getInterventions } from '../../request/requests';

import Search from '../../Component/Search';
import Result from '../../Component/Result';
import Filter from '../../Component/Filter';

import style from './style.module.css';

class Intervention extends React.Component {
  constructor() {
    super();

    this.state = {
      results: [],
      categories: [],
      currentCategory: '',
      currentSearch: '',
      previousSearch: '',
      initialSearch: true,
      loading: false,
      hasError: false,
    }

    this.handleSearchOnChange = this.handleSearchOnChange.bind(this);
    this.handleSearchResults = this.handleSearchResults.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleSearchOnChange(e) {
    this.setState( { currentSearch: e.target.value });
  }

  getCategories(results) {
    if (!results) return [];

    const categorySet = new Set();

    results.forEach(result => categorySet.add(result.category));

    return [...categorySet];
  }

  async handleSearchResults(event) {
    event.preventDefault();

    const { currentSearch } = this.state;

    try {
      const results = await getInterventions(currentSearch);
      const { terms } = results;

      const categories = this.getCategories(terms);

      this.setState({
        results: terms,
        initialSearch: false,
        previousSearch: currentSearch,
        currentSearch: '',
        currentCategory: '',
        categories: categories,
      });
    } catch(err) {
      this.setState({
        hasError: true
      });
    }
  }

  handleCategoryChange(e) {
    this.setState({
      currentCategory: e.target.value
    });
  }

  handleFilterResults() {
    const { results, currentCategory } = this.state;

    if (!currentCategory) return results;

    return results.filter(result => result.category === currentCategory);
  }

  render() {
    const {
      currentSearch,
      currentCategory,
      previousSearch,
      initialSearch,
      categories,
      hasError,
    } = this.state;

    const filteredResults = this.handleFilterResults();

    return (
      <div className={style.interventionContainer}>
        <Search
          placeholder='Search for interventions'
          value={currentSearch}
          onChange={this.handleSearchOnChange}
          onSubmit={this.handleSearchResults}
          categories={categories}
        />
        <Filter
          handleChange={this.handleCategoryChange}
          categories={categories}
          currentCategory={currentCategory}
        />
        <Result
          results={filteredResults}
          currentSearch={currentSearch}
          previousSearch={previousSearch}
          initialSearch={initialSearch}
          hasError={hasError}
        />
      </div>
    )
  }
}

export default Intervention;
