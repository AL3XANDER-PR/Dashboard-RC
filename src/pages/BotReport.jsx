import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import BotRow from "../components/BotRow";
import { BASE_URL } from "../env";

function BotReport() {
  const [pacientes, setPacientes] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [queryParams, setQueryParams] = useState({
    q: "", //'searchQuery',
    perPage: 5, //'perPage',
    page: 0, //'currentPage',
  });

  // const baseURL = "http://localhost:3007/api/bot/";
  // const baseURL = "https://nodejs-production-b648.up.railway.app/api/paciente";

  const getPacientes = async () => {
    let params = {};
    if (queryParams.q !== "") {
      params = { ...queryParams, page: 0 };
    } else {
      params = queryParams;
    }
    try {
      const { data } = await axios({
        method: "GET",
        url: BASE_URL + "/bot/",
        params: params,
      });
      setPacientes(data.rows);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPageNumber);
      // pacientes.value = data.rows;
      // metaData.totalPages = data.totalPages;
      // metaData.currentPage = data.currentPageNumber;
    } catch (e) {
      return "Error: " + e.message;
    }
  };

  useEffect(() => {
    getPacientes();
    // console.log(pacientes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams.q]);

  return (
    <>
      <div className="grid ">
        <div className="bg-white shadow-md dark:bg-gray-800 relative sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 py-4 px-4">
            {/* <div className="w-full md:w-1/2">
              <form
                className="flex items-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    onChange={(event) => {
                      setQueryParams((prevState) => {
                        return {
                          ...prevState,
                          ["q"]: event.target.value,
                        };
                      });
                    }}
                  />
                </div>
                <button
                  onClick={getPacientes}
                  className="flex items-center justify-center text-blue-500 dark:text-white border border-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-2"
                >
                  Search
                </button>
              </form>
            </div> */}
            {/* <div className="ml-auto w-full md:w-auto flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button
                id="btnModalPatient"
                type="button"
                className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                </svg>
                Add Patient
              </button>
            </div> */}
          </div>
          <div className="">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="py-3 px-4 md:hidden">
                    <span className="sr-only">Expand/Collapse Row</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Answere
                  </th>
                  <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                    KetWord
                  </th>
                  <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                    Phone
                  </th>
                  {/* <th
                    scope="col"
                    className="px-0 py-3 text-center hidden sm:table-cell"
                  >
                    SSN
                  </th> */}

                  {/* <th scope="col" className="hidden sm:table-cell">
                    <span className="sr-only">Actions</span>
                  </th> */}
                </tr>
              </thead>
              <tbody data-accordion="table-column">
                {pacientes.map((item) => {
                  return <BotRow key={item.id} usuario={item} />;
                })}
              </tbody>
            </table>
          </div>
          <nav
            className="flex items-center flex-column flex-wrap justify-center md:flex-row md:justify-between pt-4 py-4 px-4"
            aria-label="Table navigation"
          >
            {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto text-center">
              Showing
              <span className="font-semibold text-gray-900 dark:text-white">
                1-10
              </span>
              of
              <span className="font-semibold text-gray-900 dark:text-white">
                1000
              </span>
            </span> */}
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 md:ml-auto">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <button
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:bg-blue-100 hover:text-sky-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  1
                </button>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default BotReport;
