import { useState } from "react"
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu'
import MobileNav from "../MobileNav/MobileNav"


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

        <nav className="bg-black/20 top-0 sticky p-2 backdrop-blur-3xl z-30">
            <div className=" nav-wrapper max-w-screen-xl flex items-center justify-between pt-1">
                <img className="w-12 h-16" src="../public/vite.svg" />

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

                <button className="menu-btn bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center w-10 h-10 text-2xl rounded-md " onClick={toggleMenu}> 
                <span>
                <MenuIcon fontSize="large"  /> 
                {openMenu ? "close" : "menu"}
                </span>
                   
                         

                    
                </button>
            </div>
        </nav>
    </>
    );

};
export default Navbar