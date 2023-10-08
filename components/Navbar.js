import React from 'react'
import styles from "@/styles/Navbar.module.css"
import { useState } from 'react';
import Link from 'next/link';
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className={styles.header}>

            <nav className="navbar">
                <div className="navbar-container">
                    <h1 className='logo'> <span>Ko</span>sm<span>os</span> 64</h1>
                    <div className={styles.tel}>
                        <a href="tel:+79173064514">+7 917 306-45-14</a>
                    </div>

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
                            <Link href="#about">About</Link>
                            <img src="taxi.png" alt="taxiImg" />
                        </li>
                        <li>
                            <Link href="#services">Services</Link>
                            <img src="taxi.png" alt="taxiImg" />
                        </li>
                        <li>
                            <a href="#contacts">Contact</a>
                            <img src="taxi.png" alt="taxiImg" />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar