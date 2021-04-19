import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

export default function Contact() {
    return (
        <Zoom>
            <div className="container-fluid py-5">
                <Link to='/'><a className="text-secondary pt-5"><i className="fas fa-sign-out-alt fs-1 ms-5" style={{transform: "rotate(180deg)"}}></i></a></Link>
                <h2 className="ms-3 mt-lg-5 pt-lg-5 mt-md-3 pt-md-3 fs-1 text-primary"><span className="px-1">Contact</span> me !</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <input className="form-control ms-lg-5 text-primary shadow-none border-secondary bg-transparent rounded-pill mt-5" type="text" placeholder="Name" />
                        <input className="form-control ms-lg-5 text-secondary border-secondary bg-transparent rounded-pill mt-3" type="e-mail" placeholder="E-mail" />
                        <textarea rows="4" className="form-control ms-lg-5 text-secondary border-secondary bg-transparent  mt-3" type="text-area" placeholder="Your Text" />
                        <button className="btn btn-secondary fs-5 w-75 ms-lg-5 mt-4">Send</button>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </Zoom>
    )
}