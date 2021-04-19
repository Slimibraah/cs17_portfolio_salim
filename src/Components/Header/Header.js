import React from 'react'
import Zoom from 'react-reveal/Zoom';
import './Header.scss';
import { NavLink as Link } from 'react-router-dom';

export default function Header() {

    return (
        <Zoom>
            <header className="pt-md-5 d-flex justify-content-between align-items-center fixed-top bg-white">
                <h2 className="ms-5 font1 text-primary">Revokk</h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light me-5">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav font2">
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" aria-current="page" href="###">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="###">Works</a>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contact' activeClassName='selected'><a className="nav-link text-secondary">Contact</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/price' activeClassName='selected'><a className="nav-link text-secondary">Price</a></Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </Zoom>
    )
}