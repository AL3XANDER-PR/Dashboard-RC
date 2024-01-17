import { NavLink } from "react-router-dom";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2 h-4 w-4"
    >
      <rect width="7" height="7" x="3" y="3" rx="1"></rect>
      <rect width="7" height="7" x="14" y="3" rx="1"></rect>
      <rect width="7" height="7" x="14" y="14" rx="1"></rect>
      <rect width="7" height="7" x="3" y="14" rx="1"></rect>
    </svg>
  );
}

function Menu() {
  const ROUTER_LIST = [
    {
      id: 1,
      to: "/",
      name: "File Upload",
      icon: Icon,
    },
    {
      id: 2,
      to: "/report",
      name: "User Reports",
      icon: Icon,
    },
    // {
    //   id: 3,
    //   to: "/bot-report",
    //   name: "Bot Reports",
    //   icon: Icon,
    // },
    // {
    //   id: 4,
    //   to: "/pdf",
    //   name: "pdf",
    //   icon: Icon,
    // },
  ];
  return (
    <>
      {/* <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        Menu
      </h5> */}
      <img
        src="/retinacare-logo.webp"
        alt=""
        className="w-14 mx-3 md:mx-auto"
      />
      <button
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        className=" md:hidden text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium py-2">
          {ROUTER_LIST.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      isActive
                        ? "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br "
                        : "dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700",

                      "  text-center  mb-2 col-span-4 md:ml-auto  inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  hover:bg-primary/80 h-9 px-4 py-2 w-full justify-start hover:text-primary-foregroun",
                    ].join(" ")
                  }
                >
                  <item.icon />

                  <span className="ms-3">{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Menu;
