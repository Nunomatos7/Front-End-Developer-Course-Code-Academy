const API_KEY = 'CfUYcxtkd3osqXS-3ZPO-ngkFt1FB0kJP3g-bUu-RV5Si_NMH2ZQPJVqw1gMyBUKDsDmBVP02eNNJSk_NdxyWXVpGiirn5lFBzaMGl5ZJ_4VzstD4pPTUeaASWBaZnYx';

async function searchBusinesses(term, location, sortBy) {
    try {
      const response = await fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      const businesses = data.businesses.map(business => ({
        id: business.id,
        name: business.name,
        imageSrc: business.image_url,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipcode: business.location.zip_code,
        category: business.categories.map(category => category.title).join(', '),
        rating: business.rating,
        reviewCount: business.review_count
      }));
  
      return businesses;
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; // Return an empty array in case of error
    }
  }
  
  export { searchBusinesses };