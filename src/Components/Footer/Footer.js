import React from 'react'
import Rotate from 'react-reveal/Rotate';
import { NavLink as Link } from 'react-router-dom';

export default function Footer() {
    return (
        <Rotate bottom right>
            <div className="w-100 bg-secondary pt-3 d-flex flex-column align-items-center">
                <div className="row p-5 text-white">
                    <div className="col-4"><i className="fs-3 mt-4 fab fa-instagram"></i></div>
                    <div className="col-4"><i className="fs-3 mt-4 fab fa-facebook-f"></i></div>
                    <div className="col-4"><i className="fs-3 mt-4 fab fa-linkedin-in"></i></div>
                </div>
                <Link to='/contact' className="text-white btn btn-primary mb-5">Contact me</Link>
                <p className="text-white">Portfolio 2021 - Salim</p>
            </div>
        </Rotate>
    )
}