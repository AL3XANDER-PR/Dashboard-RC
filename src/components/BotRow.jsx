import { useState } from "react";
import { avatarText } from "../utils/pacienteUtils";

function BotRow({ usuario }) {
  const { id, answer, keyword, phone } = usuario;

  const [showRow, setShowRow] = useState(false);

  console.log(usuario);
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
        <td
          className="md:hidden"
          // id={`table-column-header-${id}`}
          // data-accordion-target={`#table-column-body-${id}`}
          aria-expanded="false"
          // aria-controls={`table-column-body-${id}`}
          onClick={() => {
            setShowRow(!showRow);
          }}
        >
          <svg
            data-accordion-icon=""
            className="w-5 h-5 mx-auto"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </td>
        <th
          scope="row"
          className="flex items-center px-4 py-3 text-gray-900 dark:text-white"
        >
          {/* <div className="inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-800 dark:border dark:border-gray-600">
            <p className="text-sky-600 font-bold">{answer}</p>
          </div> */}
          <div className="ps-3">
            <div className="text-sm font-semibold">{answer}</div>
          </div>
        </th>
        <td className="px-4 py-3 text-xs hidden sm:table-cell">{keyword}</td>
        <td className="px-4 py-3 text-xs hidden sm:table-cell">{phone}</td>
        {/* <td className="px-4 py-3 text-xs text-center hidden sm:table-cell">
          {ssn}
        </td> */}

        {/* <td className="px-4 py-3 hidden sm:flex items-center justify-end">
          <button
            id={`action-${id}-button`}
            data-dropdown-toggle={`action-${id}`}
            className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
            type="button"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
          <div
            id={`action-${id}`}
            className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby={`action-${id}-button`}
            >
              <li>
                <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Update Patient
                </a>
              </li>
              <li>
                <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Preview PDF
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Export PDF
              </a>
            </div>
          </div>
        </td> */}
      </tr>
      <tr
        className={showRow ? "static" : "hidden"}
        // id={`table-column-body-${id}`}
        // aria-labelledby={`table-column-header-${id}`}
      >
        <td colSpan="6" className="">
          <div className="py-3 px-0 overflow-hidden">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </th>
                  <th
                    scope="row"
                    className="px-3 py-4 font-normal text-gray-900 dark:text-white"
                  >
                    {/* {phone} */}
                  </th>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </th>
                  <th
                    scope="row"
                    className="px-3 py-4 font-normal text-sm text-gray-900 dark:text-white"
                  >
                    {/* {birthDate} */}
                  </th>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Phone
                  </th>
                  <th
                    scope="row"
                    className="px-3 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {phone}
                  </th>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Phone
                  </th>
                  <th
                    scope="row"
                    className="px-3 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {phone}
                  </th>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td colSpan="2" className="px-6 py-4">
                    <div
                      className="inline-flex rounded-md shadow-sm"
                      role="group"
                    >
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                      >
                        Update Patient
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-blue-500 border-t border-b border-blue-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                      >
                        Preview PDF
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                      >
                        Export PDF
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </>
  );
}

export default BotRow;
