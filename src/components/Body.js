import { RestaurantCard } from './RestaurantCard';
import { restaurants } from '../utils/mockData';

export const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} info={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
