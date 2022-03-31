import React from "react";

function Footer() {
  return (
    <div className="overflow-hidden text-zinc-800 antialiased invisible  md:visible  h-0 md:h-52">
      <footer className="flex w-screen h-36 mt-5 bg-indigo-100">
        <div className=" flex-grow-4 flex">
          <div className="flex flex-col mx-12 justify-center mb-10 text-center">
            <div className="prose-lg  mx-auto font-bold mt-5">
              Project Canary
            </div>
            <p className="prose-md text-md text-center">
              Project Canary uses the VirusTotal API and is actively mantained
              by developers.
            </p>
          </div>
        </div>
        <div className=" flex-grow-2 flex justify-center content-center flex-col">
          <div className="flex">
            <a href="https://github.com/GabrielMarisescu/Project-Canary">
              <img
                className=" object-contain h-16 w-32 mt-4 cursor-pointer"
                alt="github"
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-marisescu/">
              <img
                className=" object-contain h-24 w-48 cursor-pointer"
                alt="linkedin"
                src="https://png2.cleanpng.com/sh/3f4e63fc7dff453bfa74dbb0dfc16b8e/L0KzQYm3V8E0N5N2jJH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfxqdpxqfNt3LXzyd7E0jPlvc5ZpgdC2d3jshLa0VfI1QGU8eaM8NHW4dYe1WMk6QGYATqk6NUO0RIe6Vcg2OmI7T5D5bne=/kisspng-computer-icons-linkedin-logo-linkedin-white-5b4847a134e5e6.8998596715314635852167.png"
              />
            </a>
          </div>
        </div>
      </footer>
      <div className=" flex bg-indigo-100">
        <hr className="border-gray-400 border-t-1  w-4/5  m-auto mb-2 " />
      </div>
      <p className="prose-xl  flex justify-center bg-indigo-100 font-extrabold">
        Made with React
      </p>
    </div>
  );
}

export default Footer;
