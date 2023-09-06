import React from 'react';

function Business(props) {
    return (
        <div className="img-container">
            <img className='restaurant-img' src={props.img} alt={props.name} />
            <h2>{props.name}</h2>
            <p>Address: {props.address}</p>
            <p>City: {props.city} / {props.state} </p>
            <p>Zip: {props.zipcode}</p>
            <p>Category: {props.category}</p>
            <p>Ratings: {props.rating} ({props.reviewCount} reviews)</p>
        </div>
    );
}

export default Business;