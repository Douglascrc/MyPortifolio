import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="bg-black/20 top-0 sticky p-2 backdrop-blur-3xl z-30">
            <div className="max-w-screen-xl flex items-center justify-between pt-1">
                <img className="w-12 h-16" src="../public/vite.svg" />

                <ul className="flex gap-3.5">

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
        </nav>
    );

};
export default Navbar;