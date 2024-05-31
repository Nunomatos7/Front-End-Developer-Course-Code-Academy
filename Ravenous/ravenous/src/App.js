import React from 'react';
import './App.css';
import BusinessList from './components/businessList/BusinessList';
import SearchBar from './components/searchBar/SearchBar';
import restaurantImage from '../src/images/pizza.jpg';

const businesses = [
  {
    imageSrc: restaurantImage,
    name: 'Restaurant A',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipcode: '90210',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    imageSrc: restaurantImage,
    name: 'Restaurant B',
    address: '456 Side St',
    city: 'Othertown',
    state: 'NY',
    zipcode: '10001',
    category: 'Mexican',
    rating: 4.0,
    reviewCount: 75
  },
  {
    imageSrc: restaurantImage,
    name: 'Restaurant C',
    address: '789 High St',
    city: 'Sometown',
    state: 'TX',
    zipcode: '73301',
    category: 'Chinese',
    rating: 4.8,
    reviewCount: 120
  },
  {
    imageSrc: restaurantImage,
    name: 'Restaurant D',
    address: '101 Low St',
    city: 'Anothertown',
    state: 'FL',
    zipcode: '33101',
    category: 'American',
    rating: 4.2,
    reviewCount: 105
  },
  {
    imageSrc: restaurantImage,
    name: 'Restaurant E',
    address: '1122 Broad St',
    city: 'Lasttown',
    state: 'WA',
    zipcode: '98101',
    category: 'Japanese',
    rating: 4.6,
    reviewCount: 95
  },
  {
    imageSrc: restaurantImage,
    name: 'Restaurant F',
    address: '1313 Narrow St',
    city: 'Thistown',
    state: 'OR',
    zipcode: '97201',
    category: 'Seafood',
    rating: 4.3,
    reviewCount: 85
  },
  {
    imageSrc: restaurantImage,
    name: 'Restaurant G',
    address: '1414 Wide St',
    city: 'Thattown',
    state: 'NV',
    zipcode: '89101',
    category: 'Thai',
    rating: 4.7,
    reviewCount: 110
  },
  {
    imageSrc: restaurantImage,
    name: 'Restaurant H',
    address: '1515 Tall St',
    city: 'Thosetown',
    state: 'AZ',
    zipcode: '85001',
    category: 'Indian',
    rating: 4.1,
    reviewCount: 100
  },
  {
    imageSrc: restaurantImage,
    name: 'Restaurant I',
    address: '1616 Short St',
    city: 'Thesetown',
    state: 'CO',
    zipcode: '80201',
    category: 'Greek',
    rating: 4.9,
    reviewCount: 130
  }
];

class App extends React.Component {
  searchYelp(term, location, sortBy) {
    // Implementation for interacting with Yelp API will go here
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <div className="SearchBarContainer">
          <SearchBar onSearch={this.searchYelp} /> {/* Ensure onSearch prop is passed */}
        </div>
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}


export default App;
