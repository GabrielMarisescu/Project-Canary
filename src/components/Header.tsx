import { Avatar } from "@mui/material";
import React from "react";
import mainProfile from "assets/Canary.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="flex justify-center h-24 text-lg  text-zinc-800 prose-p:font-bold">
        <Link to="/">
          <div className="flex mt-10 ml-5">
            <Avatar
              alt="Canary Logo"
              src={mainProfile}
              sx={{ width: 56, height: 56 }}
            />
            <p className="flex self-center ml-5 ">Project Canary</p>
          </div>
        </Link>
        <div className="mr-5  mt-14"></div>
      </nav>
    </>
  );
}
export default Header;
