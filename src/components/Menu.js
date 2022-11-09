import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = (props) => {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-navbar main-menu" style={{ boxShadow: "none" }}>
            <div className="container">

                <button type="button" id="sidebarCollapse" className="btn btn-link d-block d-md-none">
                    <i className="bx bx-menu icon-single"></i>
                </button>

                <NavLink className="navbar-brand" to="/">
                    <div className="fw-bold btn fs-4 text-light">Nuchange</div>
                </NavLink>

                <ul className="navbar-nav ml-auto d-block d-md-none">
                    <li className="nav-item">
                        <NavLink to="/cart">

                            <div className="btn btn-success">Cart
                                <span className="badge bg-danger ms-2">
                                    {props.cartValue.totalQuantity !== undefined ||
                                        props.totalQuantity !== undefined ||
                                        props !== undefined ? props.cartValue.totalQuantity : 0}
                                </span>
                            </div>
                        </NavLink>
                    </li>
                </ul>

                <div className="collapse navbar-collapse">
                    <form className="form-inline my-2 my-lg-0 mx-auto d-flex w-50">
                        <input className="form-control" onChange={(e) => props.search(e.target.value)} type="search" placeholder="Search for products..." aria-label="Search" />
                        <div className="btn btn-success my-2 my-sm-0">Search</div>
                    </form>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/cart">
                                <div className="btn btn-success">Cart
                                    <span className="badge bg-danger ms-2">
                                        {props.cartValue.totalQuantity !== undefined ||
                                            props.totalQuantity !== undefined ||
                                            props !== undefined ? props.cartValue.totalQuantity : 0}
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item ml-md-3 ms-3">
                            <button className="btn btn-primary">Log In / Register</button>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Menu