import { Link } from "react-router-dom";
import MainApp from "../pages/index";
import gabe from "../assets/gabe-orange.png";
import hamburger from "../assets/menu.png";

function Nav() {
  return(
    <>
      <nav>
        <a id="home-link">
          <img id="headshot" src={gabe} />
          <p>gabriel marisescu</p>
        </a>

        <div className="links">
          <a>About</a>
          <a>Projects</a>
          <a>Contact</a>
        </div>
      </nav>
    </>
  )

}

export default Nav;