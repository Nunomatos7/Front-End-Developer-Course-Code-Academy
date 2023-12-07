import React from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    search(){
        this.state.searching && this.props.onSearch(this.state.searching);
    }
    handleTermChange(event){
      this.setState({searching: event.target.value});
    }
    render() {
        return (
            <div className={styles.SearchBar}>
                <input placeholder="Enter a Song, Album, or Artist" onChange={this.handleTermChange}/>
                <a className={styles.SearchButton} onClick={this.search}>SEARCH</a>
            </div>
        );
    }
}

export default SearchBar;