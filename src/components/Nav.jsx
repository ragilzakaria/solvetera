import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import SolveteraLogo from "../assets/icon/SolveteraLogo.svg";

const Nav = () => {
  return (
    <header className="padding-x py-4 sticky top-0 z-10 w-full shadow-md bg-white">
      <nav className="flex justify-between items-center max-container">
        {/* Logo Link */}
        <HashLink to="/#home">
          <img
            src={SolveteraLogo}
            alt="logo"
            width={60}
            height={43}
          />
        </HashLink>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center items-center gap-16">
          <HashLink to="/#aboutus" className="text-black text-xl hover:text-green">
            About Us
          </HashLink>
          <Link to="/Service" className="text-black text-xl hover:text-green">
            Service
          </Link>
        </div>

        {/* Contact Us Button */}
        <a
          href="mailto:solvetera@gmail.com"
          className="hidden xl:block bg-teal-600 text-white font-semibold text-base py-2 px-6 rounded-xl hover:bg-teal-700 focus:outline-none"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Nav;
