import NavLink from "./NavLink";

const HeaderBar = () => {
  return (
    <header>
      <nav className="flex flex-row bg-slate-700 text-slate-50 py-3 px-3 items-baseline justify-between sm:justify-start">
        <p className="text-3xl">
          <NavLink href={"/"} text="Juliette" />
        </p>
        <p className="hidden sm:block mx-5 text-lg underline underline-offset-4 decoration-slate-100">
          <NavLink href={"/bad-ui"} text="Bad UI" />
        </p>
        <p className="hidden sm:block mx-3 text-lg underline underline-offset-4 decoration-slate-100">
          <NavLink href={"/good-ui"} text="Good UI" />
        </p>

        <button className="sm:hidden">
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
      </nav>
    </header>
  );
};

export default HeaderBar;
