// SearchBar.js

import React from 'react';
import './SearchBar.css';
import { searchBusinesses } from '../../utils/yelpAPI'; // Import the search function

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  async handleSearch(event) {
    event.preventDefault();
    const { term, location, sortBy } = this.state;
    const businesses = await searchBusinesses(term, location, sortBy); // Call the search function
    this.props.onSearch(businesses); // Pass down the returned list of businesses
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            value={this.state.term}
            onChange={this.handleTermChange}
          />
          <input
            placeholder="Where?"
            value={this.state.location}
            onChange={this.handleLocationChange}
          />
        </div>
        <div className="SearchBar-sort-options">
          <button
            className={this.state.sortBy === 'best_match' ? 'active' : ''}
            onClick={() => this.handleSortByChange('best_match')}
          >
            Best Match
          </button>
          <button
            className={this.state.sortBy === 'rating' ? 'active' : ''}
            onClick={() => this.handleSortByChange('rating')}
          >
            Highest Rated
          </button>
          <button
            className={this.state.sortBy === 'review_count' ? 'active' : ''}
            onClick={() => this.handleSortByChange('review_count')}
          >
            Most Reviewed
          </button>
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearch}>Let's Go</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
