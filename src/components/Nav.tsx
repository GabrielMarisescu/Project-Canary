import { Link } from "react-router-dom";
import MainApp from "../pages/index";
import gabe from "../assets/gabe-square.png"

function Nav() {
  return(
    <>
      <nav>
        <a id="home-link">
          <img id="headshot" src={gabe} />
          <p>gabriel marisescu</p>
        </a>

        <div id="links">
          <a>About</a>
          <a>Projects</a>
          <a>Contact</a>
        </div>
      </nav>
    </>
  )

}

export default Nav;