import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Controle de Filmes</Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Assistir</Link>
                        </li>

                        <li>
                            <Link to="/watched">Assistido</Link>
                        </li>

                        <li>
                            <Link to="/add" className="btn">+ Add</Link>
                        </li>
                    </ul>
                </div> 
            </div> 
        </header>

    )
}
