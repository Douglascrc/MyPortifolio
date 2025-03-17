import "./MobileNav.css";
import Dev from "../../../assets/command.svg";

const MobileNav = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="h-screen w-3/5 p-8 bg-gradient-to-b from-black to-[#130f2a]">
        <div className="flex items-center border-b border-[#6751b9] pb-4 mb-6">
          <img className="w-12 h-12" src={Dev} alt="logo" />
          <h2 className="ml-2 text-xl font-semibold bg-gradient-to-r from-[#a892fe] to-[#8064e8] bg-clip-text text-transparent">
            Portfolio
          </h2>
        </div>

        <ul className="flex flex-col gap-4 -ml-4">
          <li>
            <a className="menu-item" href="">
              Home
            </a>
          </li>
          <li>
            <a className="menu-item" href="">
              Skills
            </a>
          </li>
          <li>
            <a className="menu-item" href="">
              Projects Experience
            </a>
          </li>
          <li>
            <a className="menu-item" href="">
              Contact Me
            </a>
          </li>

          <button className="contact-btn" onClick={() => {}}>
            Call me!
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
