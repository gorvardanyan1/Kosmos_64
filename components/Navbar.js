import React from 'react'
import styles from "@/styles/Navbar.module.css"
const Navbar = () => {
    return (
        <header className={styles.header}>
            <h1> <span>Ko</span>sm<span>os</span> 64</h1>
            <nav className={styles.nav}>
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
            </nav>
        </header>
    )
}

export default Navbar