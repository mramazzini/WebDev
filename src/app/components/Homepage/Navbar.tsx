export const Navbar = () => {
  return (
    <nav className="navbar absolute z-[999] max-w-[1536px] ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl tracking-tight">
          <img src="/svg/logo.svg" alt="logo" className="w-8 h-8 " />
          Ramazzi Tech
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
};
