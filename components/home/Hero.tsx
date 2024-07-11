export default function Hero() {
  return (
    <div
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <div className="">
        <img
          src="/banner.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-25"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 text-left">
            <h2 className="text-xs lg:text-base font-semibold leading-7 text-[#9D00FF] uppercase">
              ENTERPRISE-GRADE WEB 3.0 INFRASTRUCTURE & SERVICES
            </h2>
            <h2 className="text-4xl font-clash font-bold tracking-tight text-white sm:text-6xl">
              Powering the Future of Web3
            </h2>
            <div></div>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Secure and performant non-custodial staking services for
              individuals and institutional investors.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex space-x-3 my-5">
              <a href="/about">
                <button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background px-4 py-2 text-white rounded w-24 text-sm md:text-base lg:w-28 h-12 hover:bg-white hover:text-black">
                  About Us
                </button>
              </a>
              <a href="/login">
                <button className="inline-flex items-center text-black justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent px-4 py-2 bg-white rounded w-28 h-12 hover:text-white">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
