"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure, Menu } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    { name: "INICIO", href: "/" },
    { name: "NOTICIAS", href: "/noticias" },
    { name: "RUTAS", href: "/rutas" },
    { name: "RECARGAS", href: "/recargas" },
    { name: "QUIENES SOMOS", href: "/quienes-somos" },
  ];

  const noticiasSubmenu = [
    { name: "Últimas noticias", href: "/noticias" },
    { name: "Noticias locales", href: "/noticias/locales" },
    { name: "Noticias internacionales", href: "/noticias/internacionales" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-1 bg-white dark:bg-gray-800 shadow-md">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <span>
              <Image
                src="/img/logoconsorcio.png"
                width={300}
                height={100}
                alt="Logo Consorcio"
                className="w-50"
              />
            </span>
          </span>
        </Link>

        {/* Get started */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="https://sistema.kbus.kradac.com/consorcio/tarjeta/situ/"
              className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            >
              Consultar saldo
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                  >
                    {item.name}
                  </Link>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="flex items-center relative" key={index}>
                {item.name === "NOTICIAS" ? (
                  <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                      {item.name}
                    </Menu.Button>

                    <Menu.Items className="absolute left-0 z-10 mt-2 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg w-44 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {noticiasSubmenu.map((submenu, i) => (
                        <Menu.Item key={i}>
                          {({ active }) => (
                            <Link
                              href={submenu.href}
                              className={`${
                                active ? "bg-indigo-500 text-white" : "text-gray-700"
                              } block px-4 py-2 text-sm`}
                            >
                              {submenu.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Menu>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                )}

                {index < navigation.length - 1 && (
                  <span className="mx-2 border-l border-gray-300 dark:border-gray-600 h-6"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
