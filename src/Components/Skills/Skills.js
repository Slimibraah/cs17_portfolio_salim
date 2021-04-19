import React from 'react'
import Slide from 'react-reveal/Slide';
import html from '../../img/html.png';
import css from '../../img/css.png';
import javascript from '../../img/javascript.png';
import react from '../../img/react.png';
import sass from '../../img/sass.png';

export default function Skills() {
    return (
        <Slide left>
            <div className="bg-primary py-5">
                <div className="container">
                    <h2 className="text-white py-5 font2 fs-1 text-center">My Stack :</h2>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-2 d-flex justify-content-center col-md-4 mt-4"><img src={html} alt="html"/></div>
                        <div className="col-lg-2 d-flex justify-content-center col-md-4 mt-4"><img src={css} alt="css"/></div>
                        <div className="col-lg-2 d-flex justify-content-center col-md-4 mt-4"><img style={{height: "90px"}} src={javascript} alt="js"/></div>
                        <div className="col-lg-2 d-flex justify-content-center col-md-6 mt-4"><img src={react} alt="react"/></div>
                        <div className="col-lg-2 d-flex justify-content-center col-md-6 mt-4"><img src={sass} alt="sass"/></div>
                    </div>
                    <div className="w-100 d-flex justify-content-center my-5">
                        <button className="btn btn-secondary fs-3 text-center">Get in touch</button>
                    </div>
                </div>
            </div>
        </Slide>
    )
}