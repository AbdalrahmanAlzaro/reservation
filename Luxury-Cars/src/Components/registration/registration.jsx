// import DatePickerValue from "./datePicker";

function Reg() {
  return (
    <>
      <div className="loginMainCont p-20 flex justify-center">
        <div
          className="grid w-2/3 grid-cols-2 my-20 bg-transparent backdrop-blur-sm items-center p-5 max-md:grid-cols-1"
          style={{ border: "1px solid white", borderRadius: "10px" }}
        >
          <div className="col1 m-15">
            <section className="">
              <div className="container">
                <div className="g-6 flex flex-wrap items-center justify-center lg:justify-between">
                  {/* Right column container with form */}
                  <div className="w-full mx-6 ">
                    <form>
                      {/* UserNam */}
                      <div
                        className="relative mb-6"
                        data-te-input-wrapper-init=""
                      >
                        <input
                          type="text"
                          className="sigInEmail peer block min-h-[auto] w-full rounded border-b-2 border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput3"
                          placeholder="User name"
                        />
                        <label
                          htmlFor="exampleFormControlInput3"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          User name
                        </label>
                      </div>
                      {/* Email input */}
                      <div
                        className="relative mb-6"
                        data-te-input-wrapper-init=""
                      >
                        <input
                          type="text"
                          className="sigInEmail peer block min-h-[auto] w-full rounded border-b-2 border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput3"
                          placeholder="Email address"
                        />
                        <label
                          htmlFor="exampleFormControlInput3"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Email address
                        </label>
                      </div>
                      {/* Password input */}
                      <div
                        className="relative mb-6"
                        data-te-input-wrapper-init=""
                      >
                        <input
                          type="password"
                          className="sigInEmail peer block min-h-[auto] w-full border-b-2 border-0 rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput33"
                          placeholder="Password"
                        />
                        <label
                          htmlFor="exampleFormControlInput33"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Password
                        </label>
                      </div>
                      {/* Password input */}
                      <div
                        className="relative mb-6"
                        data-te-input-wrapper-init=""
                      >
                        <input
                          type="password"
                          className="sigInEmail peer block min-h-[auto] w-full border-b-2 border-0 rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput33"
                          placeholder="Confirm Password"
                        />
                        <label
                          htmlFor="exampleFormControlInput33"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Confirm password
                        </label>
                      </div>
                      {/* <div className="flex justify-center text-white">
                        <DatePickerValue />
                      </div> */}
                      {/* Remember me checkbox */}
                      {/* Submit button */}
                      <button
                        type="submit"
                        className="inline-block w-full bg-gradient-to-br from-white to-blue-500  rounded-xl px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gradient-to-l from-white to-blue-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gradient-to-r from-white to-blue-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init=""
                        data-te-ripple-color="light"
                      >
                        Sign Up
                      </button>
                      {/* Divider */}
                      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="text-white mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                          OR
                        </p>
                      </div>
                      {/* Social login buttons */}
                      <a
                        className="mb-3 flex w-full items-center justify-center rounded-xl bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        style={{ backgroundColor: "#3b5998" }}
                        href="#!"
                        role="button"
                        data-te-ripple-init=""
                        data-te-ripple-color="light"
                      >
                        {/* Facebook */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-3.5 w-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                        Continue with Facebook
                      </a>
                      <a
                        className="mb-3 flex w-full items-center justify-center rounded-xl bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                        style={{ backgroundColor: "#55acee" }}
                        href="#!"
                        role="button"
                        data-te-ripple-init=""
                        data-te-ripple-color="light"
                      >
                        {/* Twitter */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-3.5 w-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                        Continue with Twitter
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col2 max-md:hidden">
            <div className="px-15 flex justify-end">
              <img
                src="https://cdn.discordapp.com/attachments/1106603223458000987/1113236293346918490/pexels-yurii-hlei-1545743.jpg"
                className="rounded-ss-3xl rounded-ee-3xl "
                alt="..."
                style={{ height: "40rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reg;
