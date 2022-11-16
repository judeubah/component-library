import React from 'react';
import './nav.scss'
import { nav_links, relevant_link } from './nava-data';
export const Navbar = (props) =>{



    return (
        <div className="nav-bar">
            <header className='nav-header'>
                <div className="nav__logo">
                    <img className='nav__logo-img' src="/img/logo/margin.svg" alt="" />
                </div>
                <div className="nav__links">
                    {nav_links.map(relevant_link)}
                </div>
                <div className="nav__buttons"></div>
            </header>
        </div>
    )
}