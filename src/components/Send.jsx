// eslint-disable-next-line react/prop-types
export function Send({ send, handleChangeSend }) {
  return (
    <>
      <div
        className={`${
          !send ? "hidden" : "static"
        } max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700`}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
          !Success!
        </h5>

        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Patient was registered correctly
        </p>
        <button
          type="submit"
          className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center  mb-2 col-span-4 md:ml-auto transition-colors"
          onClick={handleChangeSend}
        >
          Enter New Patient
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </>
  );
}
