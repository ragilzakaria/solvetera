import SolveteraLogo from "../assets/icon/SolveteraLogo.svg";

const Nav = () => {
  return (
    <header className="padding-x py-4 sticky top-0 z-10 w-full shadow-md bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="home">
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
        <button className="hidden xl:block bg-teal-600 text-white font-semibold text-base py-2 px-6 rounded-xl hover:bg-teal-700 focus:outline-none">
          Contact Us
        </button>
      </nav>
    </header>
  )
}

export default Nav