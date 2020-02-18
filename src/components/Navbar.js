import React from 'react'
import { NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="#">Logo</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Citater
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to="/alle_citater">Vis alle</NavLink>
                        <NavLink className="dropdown-item" to="/">Vis udvalgte</NavLink>
                    </div>
                </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/kategorier">Kategorier</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Administrator
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item" to="/citat_admin">Citat Administrator</NavLink>
                            <NavLink className="dropdown-item" to="/kat_admin">Kategorier Administrator</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
