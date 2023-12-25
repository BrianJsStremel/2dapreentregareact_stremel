import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

const Navbar = () => {
    const notificationCount = 5;
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Pharmacity-NeW
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" exact="true" to="/">
                        Inicio
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/Bellesa">
                                Cosméticos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/Bebés">
                                Bebés
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <CartWidget notificationCount={notificationCount} />
            </div>
        </nav>
    );
};

export default Navbar;



