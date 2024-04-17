export const RestaurantCard = ({ info }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    url,
    sla: { deliveryTime },
  } = info;
  return (
    <div className="res-card">
      <img className="res-logo" src={url} alt="restaurant logo" />
      <div className="res-card-details">
        <h3 className="res-heading">{name}</h3>
        <div>
          <div className="eta-rating-container">
            <div className="rating">
              <img
                className="star-rating-logo"
                src="https://www.vhv.rs/dpng/d/502-5020339_circle-with-star-green-hd-png-download.png"
                alt="star rating logo"
              />
              <p>{avgRating}</p>
            </div>
            <p>ETA {deliveryTime} min</p>
            <p>{costForTwo}</p>
          </div>
        </div>
        <p className="cuisines">{cuisines.join(', ')}</p>
      </div>
    </div>
  );
};
