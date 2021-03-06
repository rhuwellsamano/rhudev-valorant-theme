import Poster from "./poster.webp";
import Button from "../Button";
import ValoNavbar from "../ValoNavbar/ValoNavbar";

// import { IoLogoJavascript } from "@react-icons/all-files/fa/IoLogoJavascript";
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Example() {
  return (
    <div className="">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-opacity-0 " />
            <div className="max-w-full max-h-full min-w-max min-h-screen cutoff-corner">
              <div className="relative max-h-full min-h-screen shadow-xl sm:overflow-hidden">
                <div className="absolute inset-0 ">
                  <video
                    poster={Poster}
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7f806cb08ad5d99f/61d908612e109d6c649d3b87/Disruption_VAL_DESKTOP_1730x720.mp4"
                      type="video/mp4"
                    />
                  </video>

                  <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-r from-indigo-500 via-slate-900 to-indigo-500" />
                </div>
                <ValoNavbar />
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-80 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white font-valorant">
                      Hey, I'm <span className="text-valorant-red">Rhu!</span>
                    </span>
                    <span className="block text-valorant-white font-Opificio_Bold text-3xl">
                      Full Stack Software Engineer + UX/UI Designer
                    </span>
                    <span className="block text-valorant-white font-Opificio_Bold text-3xl">
                      Game Developer + Content Creator + Brand Strategist
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                    I'm a Digital Creator of all things, from games to web.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-valorant-red bg-white hover:bg-indigo-50 sm:px-8"
                      >
                        Get started
                      </a>

                      <Button />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                My Signature Tech Stack
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
