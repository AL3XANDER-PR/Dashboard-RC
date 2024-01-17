import ViewPdf from "./ViewPdf";

function Modal({ id, url_format }) {
  // console.log("asdas", { id, url_format });
  return (
    <>
      <button
        type="button"
        data-modal-target={`crypto-modal-${id}`}
        data-modal-toggle={`crypto-modal-${id}`}
        className="text-gray-900 bg-white shadow hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
      >
        <svg
          aria-hidden="true"
          className="w-4 h-4 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          ></path>
        </svg>
      </button>

      <div
        id={`crypto-modal-${id}`}
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between pt-2 px-4 md:px-2 md:pt-2  rounded-t dark:border-gray-600">
              {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Connect wallet - {id}
              </h3> */}
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle={`crypto-modal-${id}`}
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
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="px-4 py-2 md:p-5">
              <div>
                <ViewPdf id={id} url_format={url_format} />
              </div>
              {/* <div>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
                >
                  <svg
                    className="w-3 h-3 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Why do I need to connect with my wallet?
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
