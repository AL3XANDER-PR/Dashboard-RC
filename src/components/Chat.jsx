import axios from "axios";
import { useEffect, useState } from "react";
import { avatarText } from "../utils/pacienteUtils";
import { FileLoading, NotFoundResults } from "./FileLoading";
import { BASE_URL } from "../env";

function Chat({ id, phone, name }) {
  const [message, setMessage] = useState();

  const getChatBot = async () => {
    console.log({ id, phone });
    try {
      const { data } = await axios({
        method: "GET",
        url: BASE_URL + `/bot/getChatBot/`,
        params: { phone },
      });

      console.log(data.data);
      setMessage(data.data);
    } catch (e) {
      alert("Error: " + e);
      return "Error: " + e.message;
    }
  };

  // useEffect(() => {
  //   // console.log(phone);
  //   getChatBot(phone);
  // }, []);

  return (
    <>
      <button
        type="button"
        data-modal-target={`chat-modal-${id}`}
        data-modal-toggle={`chat-modal-${id}`}
        className="text-gray-900 bg-white shadow hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
        onClick={getChatBot}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      </button>

      <div
        id={`chat-modal-${id}`}
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl ">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between pt-2 px-4 md:px-2 md:pt-2  rounded-t dark:border-gray-600">
              {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Connect wallet - {id}
              </h3> */}
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle={`chat-modal-${id}`}
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
            <div className="px-4 py-3 md:p-5 min-h-52 max-h-[80vh] overflow-y-scroll">
              {message ? (
                message.map((item) => {
                  const isAnswerFromBot =
                    item.keyword.startsWith("key_") ||
                    item.keyword.startsWith("ans_");
                  return (
                    <div
                      className={`flex items-start gap-2.5 mb-2   ${
                        !isAnswerFromBot
                          ? "justify-end text-end "
                          : "text-start"
                      }`}
                      key={item.id}
                    >
                      {/* <div className="w-8 h-8 rounded-full inline-flex items-center justify-center   bg-gray-100 :bg-gray-800 dark:border dark:border-gray-600">
                        <p className="text-sky-600 font-bold">
                          {avatarText(name)}
                        </p>
                      </div> */}
                      <div
                        className={`${
                          !isAnswerFromBot ? "bg-blue-100" : "bg-green-100"
                        } flex flex-col  md:max-w-[500px]  leading-1.5 px-2 md:px-4 py-2 border-gray-200  rounded-e-xl rounded-es-xl `}
                      >
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {!isAnswerFromBot ? name : "Bot"}
                          </span>
                          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            {!isAnswerFromBot ? phone : ""}
                          </span>
                        </div>
                        <code className="text-xs md:text-sm font-normal py-2.5  text-gray-900 dark:text-white whitespace-pre-line leading-[15px] md:leading-normal">
                          {item.answer}
                        </code>
                      </div>
                    </div>
                  );
                })
              ) : (
                <FileLoading />
              )}

              {message?.length === 0 && <NotFoundResults />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
