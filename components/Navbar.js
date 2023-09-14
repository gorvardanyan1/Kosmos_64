import React from 'react'
import styles from "@/styles/Navbar.module.css"
import { useState } from 'react';
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className={styles.header}>
            {/* <h1> <span>Ko</span>sm<span>os</span> 64</h1> */}
            {/* <nav className={styles.nav}>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                        <img src="taxi.png" alt="taxiImg" />
                    </li>
                    <li>
                        <a href="#services">Services</a>
                        <img src="taxi.png" alt="taxiImg" />
                    </li>
                    <li>
                        <a href="#about">About</a>
                        <img src="taxi.png" alt="taxiImg" />
                    </li>
                    <li>
                        <a href="#contacts">Contacts</a>
                        <img src="taxi.png" alt="taxiImg" />
                    </li>
                </ul>
            </nav> */}
            <nav className="navbar">
                <div className="navbar-container">
                    <h1 className='logo'> <span>Ko</span>sm<span>os</span> 64</h1>
                    <div className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <li>
                            <a href="#">Home</a>
                            <img src="taxi.png" alt="taxiImg" />
                        </li>
                        <li>
                            <a href="#about">About</a>
                            <img src="taxi.png" alt="taxiImg" />
                        </li>
                        <li>
                            <a href="#services">Services</a>
                            <img src="taxi.png" alt="taxiImg" />
                        </li>
                        <li>
                            <a href="#">Contact</a>
                            <img src="taxi.png" alt="taxiImg" />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar