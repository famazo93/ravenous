import Navbar from './Navbar';
import Searchbar from './Searchbar'

function Header() {
    return (
        <div className='header'>
            <Navbar />
            <img id='main-background' alt='' src={require('../banner.jpg')} />
            <Searchbar />
        </div>
    )
}

export default Header;