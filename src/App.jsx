import { useEffect } from "react";
import Menu from "./components/Menu";
import { initFlowbite } from "flowbite";
import { Route, Routes } from "react-router-dom";
import FileUpload from "./pages/FileUpload";
import Report from "./pages/Report";
// import BotReport from "./pages/BotReport";
// import ViewPdf from "./components/ViewPdf";
// import Chat from "./components/Chat";

// console.log(process.env.NODE_ENV !== 'production');

function App() {
  useEffect(() => {
    initFlowbite();
    // initModals();
  }, []);
  return (
    <>
      <div className="grid grid-cols-6 w-full max-h-screen">
        <div className="col-span-1 hidden md:block border-r">
          <div className=" px-4 h-screen overflow-y-auto py-3 ">
            <Menu />
          </div>
        </div>

        <div className="col-span-6 md:col-span-5 max-h-screen  overflow-hidden relative">
          <nav className="w-full  shadow-lg dark:border-gray-600 z-10">
            <div className="flex  items-center justify-end gap-5 mx-auto px-4 md:py-6 py-3">
              {/* <button
                id="dropdownAvatarNameButton"
                data-dropdown-toggle="dropdownAvatarName"
                className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                type="button"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 me-2 rounded-full"
                  src="https://ui-avatars.com/api/?name=John+Doe"
                  alt="user photo"
                />
                Bonnie Green
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button> */}

              <div
                id="dropdownAvatarName"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div className="font-medium ">Pro User</div>
                  <div className="truncate">name@flowbite.com</div>
                </div>
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>

              <button
                type="button"
                data-drawer-target="drawer-navigation"
                data-drawer-show="drawer-navigation"
                aria-controls="drawer-navigation"
                className="md:hidden items-center p-2  justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </nav>
          <main className=" bg-gray-100 overflow-y-scroll h-[95vh] px-6 md:px-10 pt-5 pb-10 md:py-8">
            <Routes>
              <Route path="/" element={<FileUpload />} />
              <Route path="/report" element={<Report />} />
              {/* <Route path="/bot-report" element={<BotReport />} /> */}
              {/* <Route path="/pdf" element={<Chat />} /> */}
            </Routes>
          </main>
        </div>

        <div
          id="drawer-navigation"
          className="fixed top-0 left-0 z-40 h-screen px-4 pt-5 pb-16 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800"
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <Menu />
        </div>
      </div>
    </>
  );
}

export default App;
