import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Row from "../components/Row";
import { BASE_URL } from "../env";

function Report() {
  const [pacientes, setPacientes] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [queryParams, setQueryParams] = useState({
    q: "", //'searchQuery',
    perPage: 5, //'perPage',
    page: 0, //'currentPage',
  });

  const [showing, setShowing] = useState({
    to: 0,
    from: 0,
  });

  // const baseURL = "http://localhost:3007/api/usuario/getUsuarios/";

  // const baseURL = "http://192.168.1.113:3007/api/usuario/getUsuarios/";
  // const baseURL = "https://nodejs-production-b648.up.railway.app/api/paciente";

  const getPacientes = async () => {
    // console.log("💻 - getPacientes - params.page:", queryParams);
    try {
      const { data } = await axios({
        method: "GET",
        url: BASE_URL + "/usuario/getUsuarios/",
        params: queryParams,
      });

      // console.log(data);
      setPacientes(data.rows);
      setTotalPages(data.totalPages);
      setShowing({
        to: data.to,
        from: data.from,
      });
    } catch (e) {
      alert("Error: " + e);
      return "Error: " + e.message;
    }
  };

  useEffect(() => {
    getPacientes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams.page, queryParams.q]);

  const handlePrevPage = () => {
    setQueryParams((prevState) => {
      return {
        ...prevState,
        page: queryParams.page - 1,
      };
    });
  };

  const handleNextPage = () => {
    setQueryParams((prevState) => {
      return {
        ...prevState,
        page: queryParams.page + 1,
      };
    });
  };

  return (
    <>
      <div className="grid ">
        <div className="bg-white shadow-md dark:bg-gray-800 relative sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 py-4 px-4">
            <div className="w-full md:w-1/2">
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
                          q: event.target.value,
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
            </div>
          </div>
          <div className="">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="py-3 px-4 md:hidden">
                    <span className="sr-only">Expand/Collapse Row</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Patient
                  </th>
                  <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                    Birth Date
                  </th>
                  <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-0 py-3 text-center hidden sm:table-cell"
                  >
                    SSN
                  </th>

                  <th scope="col" className="">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody data-accordion="table-column">
                {pacientes.map((item) => {
                  return <Row key={item.id} usuario={item} />;
                })}
              </tbody>
            </table>
          </div>
          <nav
            className="flex items-center flex-col flex-wrap justify-center md:flex-row md:justify-between pt-4 py-4 px-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block  md:inline md:w-auto">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {showing.to}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {showing.from}
              </span>
            </span>

            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 md:ml-auto">
              <li>
                <button
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={handlePrevPage}
                  disabled={queryParams.page === 0}
                >
                  <svg
                    className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 5H1m0 0 4 4M1 5l4-4"
                    />
                  </svg>
                  Previous
                </button>
              </li>

              {/* <li>
                <button
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:bg-blue-100 hover:text-sky-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  1
                </button>
              </li> */}

              {/* {totalPages.map((item, index) => {
                console.log(index, item);
                return (
                  <li key={index}>
                    <button
                      href="#"
                      aria-current="page"
                      className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:bg-blue-100 hover:text-sky-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      {item}
                    </button>
                  </li>
                );
              })} */}

              <li>
                <button
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={handleNextPage}
                  disabled={queryParams.page + 1 === totalPages}
                >
                  Next
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Report;
