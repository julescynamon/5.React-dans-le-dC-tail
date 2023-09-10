import { useState } from "react";
import hamburger from "./assets/hamburger.svg";
import close from "./assets/close.svg";
export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 w-full flex justify-center p-4 bg-slate-200">
        <ul
          className={`${
            showMenu ? "flex" : "hidden"
          } flex-col items-center bg-slate-200 w-full absolute justify-center top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 `}
        >
          <li>
            <a
              href="#"
              className="inline-block py-2 mx-4 text-lg sm:py-0 text-slate-800"
            >
              Acceuil
            </a>
            <a
              href="#"
              className="inline-block py-2 mx-4 text-lg sm:py-0 text-slate-800"
            >
              Service
            </a>
            <a
              href="#"
              className="inline-block py-2 mx-4 text-lg sm:py-0 text-slate-800"
            >
              Tarifs
            </a>
            <a
              href="#"
              className="inline-block py-2 mx-4 text-lg sm:py-0 text-slate-800"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="ml-auto sm:hidden"
        >
          <img
            className="w-4"
            src={showMenu ? close : hamburger}
            alt="icone menu"
          />
        </button>
      </nav>
    </div>
  );
}
