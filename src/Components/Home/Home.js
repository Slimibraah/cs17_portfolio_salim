import React from 'react';
import './Home.scss';
import Header from '../Header/Header';
import HomeContent from '../HomeContent/HomeContent';

export default function Home() {
    return (
        <div className="home">
            <Header/>
            <HomeContent/>
        </div>
    )
}