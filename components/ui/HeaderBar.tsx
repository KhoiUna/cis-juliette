import NavLink from "./NavLink";
import { useState } from "react";

const MenuSidebar = ({ toggleMenu }) => {
  return (
    <>
      <div
        onClick={() => toggleMenu()}
        className="cursor-pointer sm:hidden absolute left-0 top-0 bg-black opacity-[0.2] w-[100vw] h-[100vh]"
      ></div>

      <div className="drop-shadow-xl sm:hidden absolute top-0 right-0 bg-slate-700 h-[100vh] w-[50%]">
        <div className="text-right">
          <button className="sm:hidden mx-5 my-5" onClick={() => toggleMenu()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <p
            className="sm:hidden mx-5 my-5 text-lg underline underline-offset-4 decoration-slate-100"
            onClick={() => toggleMenu()}
          >
            <NavLink href={"/bad-ui"} text="Bad UI" />
          </p>
          <p
            className="sm:hidden mx-5 text-lg underline underline-offset-4 decoration-slate-100"
            onClick={() => toggleMenu()}
          >
            <NavLink href={"/good-ui"} text="Good UI" />
          </p>
        </div>
      </div>
    </>
  );
};

const HeaderBar = () => {
  const [menuOpened, setMenuOpened] = useState<Boolean>(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <header className="sticky top-0 z-10 shadow-xl">
      <nav className="rounded-b-lg flex flex-row bg-slate-700 text-slate-50 py-3 px-3 items-baseline justify-between sm:justify-start">
        <p className="text-3xl">
          <NavLink href={"/"} text="Juliette" />
        </p>
        <p className="hidden sm:block mx-5 text-lg underline underline-offset-4 decoration-slate-100">
          <NavLink href={"/bad-ui"} text="Bad UI" />
        </p>
        <p className="hidden sm:block mx-3 text-lg underline underline-offset-4 decoration-slate-100">
          <NavLink href={"/good-ui"} text="Good UI" />
        </p>

        <button className="sm:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {menuOpened && <MenuSidebar toggleMenu={toggleMenu} />}
      </nav>
    </header>
  );
};

export default HeaderBar;
