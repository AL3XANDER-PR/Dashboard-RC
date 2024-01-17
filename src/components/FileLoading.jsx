export function FileLoading() {
  return (
    <>
      <div className="image">
        <img src="retinacare-logo.webp" alt="" />

        <div className="spin spinner"></div>
      </div>
    </>
  );
}

export function NotFoundResults() {
  return (
    <div className="image flex flex-col items-center justify-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10 mb-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      <h1 className="text-xl">Not Found</h1>
      <p>This person has no messages yet</p>
    </div>
  );
}
