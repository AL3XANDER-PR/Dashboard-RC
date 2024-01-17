// import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
// import { useInputDate } from "../hooks/useInputDate";
import { useEffect, useState } from "react";
/* eslint-disable react/prop-types */
export function InputTextComponent({
  label = "InputText",
  name,
  className,
  handleChange,
  value,
}) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        id={name}
        value={value}
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        name={name}
        onChange={(e) =>
          handleChange({ name: e.target.name, value: e.target.value })
        }
      />
      <label
        htmlFor={name}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
}

export function InputFileComponent({
  label = "InputText",
  name,
  className,
  handleChange,
}) {
  return (
    <div className={`relative ${className}`}>
      <label
        className="block mb-2 text-xs font-medium text-gray-500  dark:text-white"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help"
        id={name}
        name={name}
        type="file"
        accept=".pdf"
        onChange={(e) =>
          handleChange({ name: e.target.name, value: e.target.files[0] })
        }
      />
      {/* <p
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        DF (MAX. 800x400px).
      </p> */}
    </div>
  );
}
export function InputNumberComponent({
  label = "InputText",
  name,
  className,
  handleChange,
  value,
}) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        onChange={(e) =>
          handleChange({ name: e.target.name, value: e.target.value })
        }
      />
      <label
        htmlFor={name}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
}

// export function InputMaskNumber({
//   label,
//   className,
//   handleChange,
//   name,
//   value,
// }) {
//   const onlyNumbers = (str) => str.replace(/[^0-9]/g, "");
//   return (
//     <div className={`relative ${className}`}>
//       <InputMask
//         mask="(999) 999-9999"
//         alwaysShowMask={false}
//         maskChar="_"
//         name={name}
//         id={name}
//         value={value}
//         placeholder=""
//         className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//         onChange={(e) => {
//           handleChange({
//             name: e.target.name,
//             value: onlyNumbers(e.target.value),
//           });
//         }}
//       />
//       <label
//         htmlFor={name}
//         className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
//       >
//         {label}
//       </label>
//     </div>
//     //   {/* {() => {
//     //     // console.log(inputProps);
//     //     return (
//     //       <div className={`relative ${className}`}>
//     //         <input
//     //           id={name}
//     //           name={name}
//     //           type="tel"
//     //           className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//     //           placeholder=" "
//     //           // onChange={(e) =>
//     //           //   handleChange({ name: e.target.name, value: e.target.value })
//     //           // }
//     //         />
//     //         <label
//     //           htmlFor={name}
//     //           className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
//     //         >
//     //           {label}
//     //         </label>
//     //       </div>
//     //     );
//     //   }} */
//     // }
//   );
// }

export function InputDateComponent({
  label = "InputText",
  name,
  className,
  handleChange,
  // value,
  send,
}) {
  // console.log(value);
  const [show, setShow] = useState();
  // eslint-disable-next-line no-unused-vars
  const [selectedDate, setSelectedDate] = useState();
  // console.log("selectedDate", selectedDate);

  const handleChangeValue = (selectedDate) => {
    setSelectedDate(selectedDate);
    // console.log({ name, value: selectedDate });
    // console.log({ name, value: selectedDate.toISOString() });
    // console.log({ name, value: selectedDate.toUTCString() });
    // cb();
    // console.log(selectedDate);
    handleChange({ name, value: selectedDate.toISOString() });
  };
  const handleClose = (state) => {
    setShow(state);
  };

  useEffect(() => {
    // console.log(selectedDate);
    // setSelectedDate(false);
    document.querySelector("#birthDate").value = "";
  }, [send]);

  const options = {
    // title: "Demo Title",
    // autoHide: true,
    // todayBtn: true,
    // clearBtn: true,
    // clearBtnText: "Clear",
    // // maxDate: new Date(),
    // // minDate: new Date("1900-01-01"),
    theme: {
      background: " border",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "text-gray-500",
      input: "",
      inputIcon: "",
      selected: "hover:bg-gray-300",
    },
    // icons: {
    //   // () => ReactElement | JSX.Element
    //   prev: () => (
    //     <svg
    //       className="w-4 h-4"
    //       fill="currentColor"
    //       viewBox="0 0 20 20"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
    //         clipRule="evenodd"
    //       ></path>
    //     </svg>
    //   ),
    //   next: () => (
    //     <svg
    //       className="w-4 h-4"
    //       fill="currentColor"
    //       viewBox="0 0 20 20"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
    //         clipRule="evenodd"
    //       ></path>
    //     </svg>
    //   ),
    // },
    // datepickerClassNames: "top-10",
    defaultDate: null,

    // language: "en",
    // // disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: name,
    inputIdProp: name,
    inputPlaceholderProp: label,
    inputDateFormatProp: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  };

  return (
    <div className={`relative ${className}`}>
      <Datepicker
        options={options}
        onChange={handleChangeValue}
        show={show}
        setShow={handleClose}
        // value={new Date()}
        // value={selectedDate}
      />

      {/* <label
        htmlFor={name}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label> */}
    </div>
  );
}
