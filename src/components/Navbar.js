function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="nav-link active" aria-current="page">Home</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">My Reviews</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">Restaurants</div>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;