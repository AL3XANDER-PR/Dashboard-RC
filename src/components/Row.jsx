import { useEffect, useState } from "react";
import { avatarText } from "../utils/pacienteUtils";
import Modal from "./Modal";
import { initModals } from "flowbite";
import Chat from "./Chat";

// eslint-disable-next-line react/prop-types
function Row({ usuario }) {
  // eslint-disable-next-line react/prop-types
  const { id, firstName, lastName, phone, ssn, birthDate, url_format, email } =
    usuario;

  // console.log(usuario.url_format);

  const [showRow, setShowRow] = useState(false);

  useEffect(() => {
    // initFlowbite();
    initModals();
  }, []);

  // console.log(usuario);
  return (
    <>
      <tr
        className={` bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900`}
      >
        <td
          className="md:hidden px-2 "
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
            className={`w-5 h-5 mx-auto ${showRow ? "rotate-180" : "rotate-0"}`}
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
          className="flex items-center px-2 md:px-4 py-3 text-gray-900 dark:text-white"
        >
          <div className="inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-800 dark:border dark:border-gray-600">
            <p className="text-sky-600 font-bold">
              {avatarText(`${firstName} ${lastName}`)}
            </p>
          </div>
          <div className="ps-3">
            <div className="text-sm font-semibold">
              {firstName} {lastName}
            </div>
            {/* <div className="text-xs font-normal text-gray-500">
          {email }
        </div> */}
          </div>
        </th>
        <td className="px-4 py-3 text-xs hidden sm:table-cell">{birthDate}</td>
        <td className="px-4 py-3 text-xs hidden sm:table-cell">{phone}</td>
        <td className="px-4 py-3 text-xs text-center hidden sm:table-cell">
          {ssn}
        </td>
        <td className="px-0 py-3 text-xs text-center space-x-1">
          <Modal id={id} url_format={url_format} />
          <Chat id={id} phone={phone} name={`${firstName} ${lastName}`} />
        </td>
      </tr>
      <tr
        className={showRow ? "static" : "hidden"}
        // id={`table-column-body-${id}`}
        // aria-labelledby={`table-column-header-${id}`}
      >
        <td colSpan="6" className="">
          <div className="py-1 px-0 overflow-hidden ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-gray-50">
              <tbody>
                <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-[6px] text-xs font-medium text-gray-900 dark:text-white"
                  >
                    Birth Date :
                  </th>
                  <th
                    scope="row"
                    className="px-3 py-[6px] text-xs font-normal text-gray-900 dark:text-white"
                  >
                    {birthDate}
                  </th>
                </tr>
                <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-[6px] text-xs font-medium text-gray-900 dark:text-white "
                  >
                    Phone :
                  </th>
                  <th
                    scope="row"
                    className="px-3 py-[6px]  font-normal text-xs text-gray-900 dark:text-white"
                  >
                    {phone}
                  </th>
                </tr>
                <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-[6px] text-xs font-medium text-gray-900 dark:text-white "
                  >
                    SSN :
                  </th>
                  <th
                    scope="row"
                    className="px-3 py-[6px] font-normal text-xs text-gray-900 dark:text-white"
                  >
                    {ssn}
                  </th>
                </tr>
                {email && (
                  <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-[6px] text-xs font-medium text-gray-900 dark:text-white border"
                    >
                      Email :
                    </th>
                    <th
                      scope="row"
                      className="px-3 py-[6px] font-normal text-xs text-gray-900 dark:text-white"
                    >
                      {email}
                    </th>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Row;
