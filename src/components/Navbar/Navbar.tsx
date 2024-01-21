import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="sticky z-30 p-2 bg-black opacity-10 backdrop-blur-3xl">
            <div>
                <img src="../public/vite.svg" />

                <ul>
                    <li>
                        <a href="">Home</a>   
                    </li>
                    <li>
                        <a href="">Skills</a>
                    </li>
                    <li>
                        <a href="">Projects Experience</a>
                    </li>
                    <li>
                        <a href="">Contact Me</a>
                    </li>

                    <button className="" onClick={ () => {}}>
                        Fale Comigo!
                    </button>
                </ul>
            </div>
        </nav>
    );

};
export default Navbar;