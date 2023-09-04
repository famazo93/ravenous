import restaurants from '../restaurants'
import Business from './Business'
console.log(restaurants);

function RestaurantPreview() {
    return (
        <div className='restaurant-container'>
            {restaurants.map(restaurant => <Business 
                    img={restaurant.img}
                    name={restaurant.name}
                    address={restaurant.address}
                    city={restaurant.city}
                    state={restaurant.state}
                    zipcode={restaurant.zipcode} 
                    category={restaurant.category}
                    rating={restaurant.rating}
                    reviewCount={restaurant['review count']}
                />
            )}
        </div>
    )
}

export default RestaurantPreview;