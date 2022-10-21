import homepageImg from "../images/Homepage-img.png";
export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your power to own, starts when you create
            </h1>
            <form className="flex justify-between py-8">
              <label
                for="UserEmail"
                class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
              >
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Email"
                  class="peer h-8 w-80 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Email
                </span>
              </label>
              <button className="px-6 py-3 text-white duration-150 bg-purple-900 rounded-md hover:bg-purple-700 active:shadow-lg">
                Sign Up Free
              </button>
            </form>
            <p className="mt-4 text-xl text-gray-500">
              Astalavee is an eCommerce platform that offers creators a webshop
              and the tools they need to market and sell their creativities.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="">
                      <div className=" rounded-lg">
                        <img
                          src={homepageImg}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
