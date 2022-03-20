import { Link } from "react-router-dom";
import MainApp from "../pages/index";
import gabe from "../assets/gabe-orange.png";
import hamburger from "../assets/menu.png";

function Nav() {
  return(
    <>
      <nav className="tracking-widest flex justify-between h-24 text-lg uppercase text-zinc-500 font-serif">

        <a className="flex items-center hover:text-amber-500 ease-in duration-500 ml-20">
          <img className="rounded-full mr-4 h-14" src={gabe} />
          <p>gabriel marisescu</p>
        </a>

        <div className="flex items-center">
          <a className="mr-20 hover:text-amber-500 ease-in duration-500">About</a>
          <a className="mr-20 hover:text-amber-500 ease-in duration-500">Projects</a>
          <a className="mr-20 hover:text-amber-500 ease-in duration-500">Contact</a>
        </div>
        
      </nav>
    </>
  )

}

export default Nav;