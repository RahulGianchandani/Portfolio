import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';

import "font-awesome/css/font-awesome.min.css"; 
import logo from '../images/SZABIST_LOGO.jpg'

class Sidebar extends Component {
    render() {
       
        return (
            <div className="sidebar">
                <img src={logo} />
                <h1><Link smooth to="/#start" className="h1_links">Rahul Gianchandani</Link></h1>
                <p style={{color:'black',fontWeight:'bold'}} className="gmail">rahul_7872@yahoo.com</p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                   
                </ul>
    
                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/rahul-gianchandani-721825140/" rel="opener noreferrer" target="_blank" class="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://github.com/RahulGianchandani" rel="opener noreferrer" target="_blank" class="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://twitter.com/Rahul_gcd" rel="opener noreferrer" target="_blank" className="fa fas fa-twitter fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:rahul_7872@yahoo.com" rel="opener noreferrer" target="_blank" class="fa fas fa-envelope fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.facebook.com/only4RahulFriendsnBeliebers/" rel="opener noreferrer" target="_blank" class="fa fas fa-facebook fa-lg"></a></li>
                    </ul>
                </div>
              
            </div>
        )
    }
}

export default Sidebar