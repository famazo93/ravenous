import Business from './Business'

function RestaurantPreview(props) {
    return (
        <div className='restaurant-container'>
            {props.restaurants.map(restaurant => <Business 
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