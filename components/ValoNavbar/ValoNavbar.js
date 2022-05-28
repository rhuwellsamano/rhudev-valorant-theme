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
    <header className="bg-gradient-to-r from-gray-800/50 to-zinc-800/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-valorant-red lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {leftNavi.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-valorant-red font-Opificio_Bold uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden ml-10 space-x-8 lg:block">
              {rightNavi.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-valorant-red font-Opificio_Bold uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
