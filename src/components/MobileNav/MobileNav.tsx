import React from "react"

const MobileNav = ({isOpen, toggleMenu}: { isOpen: boolean, toggleMenu: () => void }) => {
    return (
        <div
            className={`mobile-menu ${isOpen ? "active": ""}`} onClick={toggleMenu}>
            
            <div className="">
                <img src="../public/vite.svg" alt="logo vite" />

                <ul className="flex gap-4">

                    <li>
                        <a className="menu-item" href="">Home</a>   
                    </li>
                    <li>
                        <a className="menu-item" href="">Skills</a>
                    </li>
                    <li>
                        <a className="menu-item" href="">Projects Experience</a>
                    </li>
                    <li>
                        <a className="menu-item" href="">Contact Me</a>
                    </li>

                    <button className="contact-btn" onClick={ () => {}}>
                        Call me!
                    </button>

                </ul>
            </div>
        </div>


    )
}

export default MobileNav