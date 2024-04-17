import { RestaurantCard } from './RestaurantCard';
import { useState, useEffect } from 'react';
import { SWIGGY_API_URL } from '../utils/constants';

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filter, setFilter] = useState(false);

  const filterRestaurant = () => {
    const filteredList = listOfRestaurants.filter(
      ({ info }) => info.avgRating > 4.2
    );
    setFilteredRestaurants(filteredList);
    setFilter((prev) => !prev);
  };

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    const {
      data: {
        cards: [
          ,
          {
            card: {
              card: {
                gridElements: {
                  infoWithStyle: { restaurants },
                },
              },
            },
          },
        ],
      },
    } = json;
    setListOfRestaurants(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => filterRestaurant()}>
          {filter ? 'Show All' : '*Show Top Rated*'}
        </button>
      </div>
      <div className="res-container">
        {filter
          ? filteredRestaurants.map(({ info }) => (
              <RestaurantCard key={info.id} info={info} />
            ))
          : listOfRestaurants.map(({ info }) => (
              <RestaurantCard key={info.id} info={info} />
            ))}
      </div>
    </div>
  );
};
