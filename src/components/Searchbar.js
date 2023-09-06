function Searchbar () {
    return (
        <div id='search' className='search'>
            <button id='best_match' className='btn btn-tertiary btn-lg'>Best Match</button>
            <button id='rating' className='btn btn-tertiary btn-lg'>Highest Rated</button>
            <button id='review-count' className='btn btn-tertiary btn-lg'>Most reviewed</button>
            <br />
            <label htmlFor='search-input' className='col-form-label'>SEARCH FOR YOUR FAVORITE RESTAURANTS</label>
            <input id='restaurant-search' className='form-control form-control-lg' type='text' placeholder='Search Restaurants'></input>
            <input id='location-search' className='form-control form-control-lg' type='text' placeholder='Location'></input>
            <button className='btn btn-secondary btn-lg'type='button'>Search</button>
        </div>
    )
}

export default Searchbar;