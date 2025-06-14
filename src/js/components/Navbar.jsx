import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand ms-2" href="#">
                Navbar
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                {/* ms-auto pushes the nav to the right */}
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active me-2">
                        <a className="nav-link" href="#">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item me-2">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item me-2">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item me-2">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
