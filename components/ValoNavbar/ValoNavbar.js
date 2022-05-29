/* This example requires Tailwind CSS v2.0+ */
// import Button from "./Button";

const leftNavi = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
];

const rightNavi = [
  { name: "Blog", href: "#" },
  { name: "Store", href: "#" },
  { name: "Contact", href: "#" },
];

export default function ValoNavbar() {
  return (
    <div className="bg-white">
      <header className="bg-gradient-to-r from-gray-800/5 to-zinc-800/5">
        <nav
          className="ml-[15%] mx-auto px-4 sm:px-6 py-0 my-0 border-b-red-800"
          aria-label="Top"
        >
          <div className="w-full flex items-center justify-between border-b border-valorant-red lg:border-none">
            <div className="flex items-center">
              <div className="hidden mr-10 space-x-[200px] lg:block">
                {leftNavi.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg opacity-80 text-[16px] text-slate-300 hover:text-valorant-red font-Opificio_Bold uppercase tracking-widest leading-none"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="valonavbar-middle-button bg-slate-300 bg-opacity-80 mx-0 my-0 py-2">
                <p className="text-[32px] opacity-80 text-slate font-tungstenBold uppercase tracking-[.12em]">
                  Portfolio
                </p>
              </div>

              <div className="hidden ml-10 space-x-[200px] lg:block">
                {rightNavi.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg opacity-80 text-[16px] text-slate-300 hover:text-valorant-red font-Opificio_Bold uppercase tracking-widest"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
