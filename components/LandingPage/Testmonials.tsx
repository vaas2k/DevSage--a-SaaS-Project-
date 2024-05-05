import { Card } from "@radix-ui/themes";

const Testmonials = () => {
  return (
    <div
      id="testimonials"
      className="flex items-center justify-center w-full px-8 py-10 border-t  md:py-16 lg:py-24 xl:py-40 xl:px-0"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex-col items-center ">
          <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
            <p className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
              Our customers love our product
            </p>
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight  sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
              Testimonials
            </h2>
            <p className="my-6 text-xl font-medium ">
              Don't just take our word for it, read from our extensive list of
              case studies and customer testimonials.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
            <div className="w-full xl:w-1/2 xl:pr-8">
              <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 border rounded-full border-indigo-600 md:flex-row md:text-left hover:bg-white hover:shadow ease">
                <div className="flex flex-col pr-8">
                  <div className="relative pl-12">
                    <svg
                      className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                    </svg>
                    <p className="mt-2 text-base text-gray-600">
                      As a self-taught dev, DevSage has been a game-changer. The
                      mentors are knowledgeable, patient, and invested in my
                      growth.
                    </p>
                  </div>

                  <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                    Sandra Walton{" "}
                    <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - Front-End Developer
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                </div>
                <img
                  className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                  src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2694&q=80"
                  alt=""
                />
              </blockquote>
              <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 mb-16 text-center transition-all duration-200 border rounded-full border-indigo-600 md:flex-row md:text-left hover:bg-white hover:shadow ease xl:mb-0">
                <div className="flex flex-col pr-10">
                  <div className="relative pl-12">
                    <svg
                      className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                    </svg>
                    <p className="mt-2 text-base text-gray-600">
                      I no longer dread coding challenges thanks to DevSage
                      real-time support. It's like having a personal coding
                      coach!
                    </p>
                  </div>
                  <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                    Kenny Jones{" "}
                    <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - Full Stack Developer
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                </div>
                <img
                  className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                  src="https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                  alt=""
                />
              </blockquote>
            </div>
            <div className="w-full xl:w-1/2 xl:pl-8">
              <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 border rounded-full border-indigo-600 md:flex-row md:text-left hover:bg-white hover:shadow ease">
                <div className="flex flex-col pr-10">
                  <div className="relative pl-12">
                    <svg
                      className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                    </svg>
                    <p className="mt-2 text-base text-gray-600">
                      As a mentor on DevSage, I get to share my passion for
                      coding while helping shape the next generation of
                      developers
                    </p>
                  </div>

                  <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                    Mike Smith
                    <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - Senior Developer
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                </div>
                <img
                  className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"
                  alt=""
                />
              </blockquote>
              <div className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 text-center transition-all duration-200 border rounded-full border-indigo-600 md:flex-row md:text-left hover:bg-white hover:shadow ease">
                <div className="flex flex-col pr-10">
                  <div className="relative pl-12">
                    <svg
                      className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                    </svg>
                    <p className="mt-2 text-base text-gray-600">
                      The collaborative coding rooms have accelerated my
                      learning tenfold. I've gained more in months than years of
                      solo practice.
                    </p>
                  </div>

                  <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                    Molly Sanchez{" "}
                    <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - Junior App Developer
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                </div>
                <img
                  className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
