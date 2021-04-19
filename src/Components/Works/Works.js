import React from 'react'
import Slide from 'react-reveal/Slide';
import chef from '../../img/desktop3.png';
import emporium from '../../img/desktop2.PNG';


export default function Works() {
    return (
        <Slide left>
            <div className="py-5">

                <h2 className="text-center text-primary font2 mb-5">My Big Projects :</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center flex-column">
                            <h3 className='text-secondary mt-5 mb-5'>Le "Site du chef"</h3>
                            <ul className="mt-3 fs-5 text-secondary">
                                technologie used :
                                <li className="text-primary mt-3 ms-3">Html</li>
                                <li className="text-primary ms-3">Scss</li>
                                <li className="text-primary ms-3">Bootstrap</li>
                                <li className="text-primary ms-3">Sass</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <a target="_blank" href="https://github.com/Slimibraah/Exo_site_du_chef"><img src={chef} alt="chef" style={{width: "100%"}}/></a>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <a target="_blank" href="https://github.com/Slimibraah/cs-17Emporium_salim"><img src={emporium} alt="chef" style={{width: "100%"}}/></a>
                        </div>
                        <div className="col-md-6 d-flex align-items-center flex-column">
                            <h3 className='text-secondary mt-5'>"Emporium"</h3>
                            <ul className="mt-3 fs-5 text-secondary">
                                technologie used :
                                <li className="text-primary mt-3 ms-3">Html</li>
                                <li className="text-primary ms-3">Scss</li>
                                <li className="text-primary ms-3">Bootstrap</li>
                                <li className="text-primary ms-3">Sass</li>
                                <li className="text-primary ms-3">Javascript</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </Slide>
    )
}