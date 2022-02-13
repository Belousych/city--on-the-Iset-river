const Navbar = () => {
  return (
    <div className="drawer fixed w-full z-40">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar shadow-lg bg-neutral text-neutral-content  z-40 w-full">
          <div className="flex-1 px-2 mx-2">
            {/* <span className="text-lg font-bold">daisyUI</span> */}
          </div>
          <div className="flex-none hidden px-2 mx-2 lg:flex">
            <div className="flex items-stretch">
              <a className="btn btn-ghost btn-sm rounded-btn">Likes</a>
              <a className="btn btn-ghost btn-sm rounded-btn">Notifications</a>
              <a className="btn btn-ghost btn-sm rounded-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 mr-2 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                Files
              </a>
              <a className="btn btn-ghost btn-sm rounded-btn">Config</a>
            </div>
          </div>
          <div className="flex-none">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side min-h-screen">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
