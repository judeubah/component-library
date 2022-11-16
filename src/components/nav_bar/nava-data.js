import React from 'react';
import './nav.scss'
import {  Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
export const nav_links = [
    {
        name: 'Who should attend?',
        link_type: 'hash',
        location: '/#attending'
    }
    ,
    {
        name: 'Agenda',
        link_type: 'hash',
        location: '/#agenda'
    }
    ,
    {
        name: 'About',
        link_type: 'hash',
        location: '/#about'
    }
    ,
    {
        name: 'Themes',
        link_type: 'link',
        location: '/themes'
    }
    ,
    {
        name: 'Venue',
        link_type: 'link',
        location: '/#venue'
    }
    
]

export const relevant_link = (dict) =>{
    return dict.link_type === 'hash' ? 
    (<HashLink key={Math.random() *999} className='nav__link'
     to={dict.location} 
     scroll={el=>{el.scrollIntoView({block:'start', inline:'nearest', behavior:'smooth'})}}>
     {dict.name}</HashLink>):
    <Link key={Math.random() *999} className='nav__link'
    scroll={el=>{el.scrollIntoView({block:'start', inline:'nearest', behavior:'smooth'})}} 
    to={dict.location}>{dict.name}</Link>
 }