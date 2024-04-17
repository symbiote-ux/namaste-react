import { RestaurantCard } from './RestaurantCard';
import { restaurants } from '../utils/mockData';
import { useState } from 'react';

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

  const filterRestaurant = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      ({ info }) => info.avgRating > 4
    );
    setListOfRestaurants(filteredRestaurants);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => filterRestaurant()}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} info={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
