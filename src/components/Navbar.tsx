"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    { name: "INICIO", href: "/" },
    { name: "NOTICIAS", href: "/noticias" },
    { name: "RUTAS", href: "/rutas" },
    { name: "RECARGAS", href: "/recargas" },
    { name: "QUIENES SOMOS", href: "/quienes-somos" },
  ];

  return (
    <div className="w-full">
<<<<<<< HEAD
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
=======
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-1 bg-gray-100 dark:bg-gray-800 shadow-md">
>>>>>>> efeaac665d0a641dd9e92f810e3cdf9e2019be63
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <span>
              <Image
                src="/img/logoconsorcio.png"
<<<<<<< HEAD
                width="32"
                alt="N"
                height="32"
                className="w-8"
              />
            </span>
            <span>CONSORCIO CIUDAD DE LOJA</span>
          </span>
        </Link>

        {/* Get started */}
=======
                width={300} // Cambia esto al tamaño deseado
                height={100} // Cambia esto al tamaño deseado
                alt="N"
                className="w-50"
              />
            </span>
          </span>
        </Link>

        {/* get started */}
>>>>>>> efeaac665d0a641dd9e92f810e3cdf9e2019be63
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Get Started
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
<<<<<<< HEAD
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
=======
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  {open && (
>>>>>>> efeaac665d0a641dd9e92f810e3cdf9e2019be63
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
<<<<<<< HEAD
                  ) : (
=======
                  )}
                  {!open && (
>>>>>>> efeaac665d0a641dd9e92f810e3cdf9e2019be63
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
<<<<<<< HEAD
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                  Get Started
                </Link>
=======
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href="/"
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                      {item}
                    </Link>
                  ))}
                  <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                    Get Started
                  </Link>
                </>
>>>>>>> efeaac665d0a641dd9e92f810e3cdf9e2019be63
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

<<<<<<< HEAD
        {/* Menu */}
=======
        {/* menu */}
>>>>>>> efeaac665d0a641dd9e92f810e3cdf9e2019be63
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={index}>
<<<<<<< HEAD
                <Link href={item.href} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  {item.name}
=======
                <Link
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  {menu}
>>>>>>> efeaac665d0a641dd9e92f810e3cdf9e2019be63
                </Link>
                {/* Divisor */}
                {index < navigation.length - 1 && (
                  <span className="mx-2 border-l border-gray-300 dark:border-gray-600 h-6" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> efeaac665d0a641dd9e92f810e3cdf9e2019be63
