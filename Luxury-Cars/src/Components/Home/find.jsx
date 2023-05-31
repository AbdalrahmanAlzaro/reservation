function Find() {
  return (
    <>
      <div className="findForm mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <form
          action=""
          className="mx-auto flex justify-center mb-0 mt-8 space-x-4 max-sm:flex-col max-sm:items-center"
        >
          <div className="max-sm:w-full">
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-gray-500 focus:border-gray-500"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 48 48"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                  />
                </svg>
              </span>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
            </div>
          </div>
          {/* /// */}
          <div className="max-sm:my-4  max-sm:w-full faildInput">
            <div className="relative">
              <input
                type="date"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm focus:ring-gray-500 focus:border-gray-500"
                placeholder="Enter email"
              />
            </div>
          </div>
          {/* /// */}
          <div className="max-sm:w-full faildInput">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-gray-500 focus:border-gray-500"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 48 48"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                  />
                </svg>
              </span>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
            </div>
          </div>
          {/* //// */}
          <div className="max-sm:my-4 max-sm:w-full faildInput">
            <div className="relative">
              <input
                type="date"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm focus:ring-gray-500 focus:border-gray-500"
                placeholder="Enter email"
              />
            </div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
          </div>
          {/* //// */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-3xl bg-black px-5 py-3 text-sm font-medium text-white"
            >
              Find a vehicle
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Find;
