import SolveteraLogo from "../assets/icon/SolveteraLogo.svg";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={SolveteraLogo} 
          alt="logo"
          width={60} 
          height={43}/>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16"> 
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href="{item.href}" className="text-black text-xl hover:text-green">
                  {item.label}
                </a>
              </li>
            ))}
        </ul>
        <button className="bg-teal-600 text-white font-semibold text-base py-2 px-6 rounded-xl hover:bg-teal-700 focus:outline-none">
          Contact Us
        </button>
      </nav>
    </header>
  )
}

export default Nav