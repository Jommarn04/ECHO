import Link from 'next/link'
import React from 'react'
import Styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={Styles.Navbar}>
            <div className={Styles.logo}>
                <Link className={Styles.Link_logo} href='/'>ECHO</Link>
            </div>
            <div className={Styles.menu}>
                <li><Link className={Styles.Link_menu} href='/'>Home</Link></li>
                <li><Link className={Styles.Link_menu} href='/'>Dropdown</Link></li>
                <li><Link className={Styles.Link_menu} href='/'>About</Link></li>
                <li><Link className={Styles.Link_menu} href='/'>Servicer</Link></li>
                <li><Link className={Styles.Link_menu} href='/'>FAQ</Link></li>
                <li><Link className={Styles.Link_menu} href='/'>Contant Us</Link></li>
                <div className={Styles.btn_download}>
                    <Link className={Styles.Link_download} href='/'>Download Now</Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar