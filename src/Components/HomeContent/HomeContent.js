import React from 'react';
import './HomeContent.scss';
import face from '../../img/face.png';
import Fade from 'react-reveal/Fade';

export default function HomeContent() {
    return (
        <Fade bottom>
            <div className="container pt-5 mt-5 overflowX">
                <div className="row overflowX mt-md-5 pt-md-5">
                    <div className="col-md-6">
                        <h2 className="font2 my-md-5 fontSize text-secondary">Salim  Duclos</h2>
                        <p className="text-primary mt-5">Hello I'm a young and motivated Web developer based in Brussels. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptas itaque quisquam quos distinctio vitae quaerat accusamus quo, provident non est natus sequi minima eveniet !</p>
                        <button className="mt-5 btn btn-secondary rounded px-3">Hire me</button>
                    </div>
                    <div className="col-md-6 row">
                        <div className="col-lg-11 d-flex justify-content-center">
                            <img className="ms-5" src={face} alt="myFace"/>
                        </div>
                        <div className="col-lg-1 d-flex align-items-end pb-5">
                            <ul className="p-0 m-0 myList">
                                <li><i className="text-primary fs-3 mt-4 fab fa-instagram"></i></li>
                                <li><i className="text-primary fs-3 mt-4 fab fa-facebook-f"></i></li>
                                <li><i className="text-primary fs-3 mt-4 fab fa-linkedin-in"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}