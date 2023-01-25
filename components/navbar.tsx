import Link from "next/link";
import React from "react";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <Link href="/">Home</Link>
            <Link href="/create">Create</Link>
            <Link href="/join">Join</Link>
        </div>
    );
}


export default Navbar; 