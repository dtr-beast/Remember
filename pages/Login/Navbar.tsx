import React from "react";

import Link from 'next/link'

export default function Navbar() {
    return <header className="text-gray-600 body-font bg-white w-full z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
            <Link href="/">
                <a className="ml-3 text-3xl text-indigo-500 italic flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">Remember</a>
                {/*<span className="">Remember</span>*/}
            </Link>

            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900">Features</a>
                <a className="mr-5 hover:text-gray-900">Common Uses</a>
                <a className="mr-5 hover:text-gray-900">For Teams</a>
                <a className="mr-5 hover:text-gray-900">Pricing</a>
            </nav>
            <Link href="/signup">
                <button
                    style={{textDecoration: "none"}}
                    className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Sign Up!
                </button>
            </Link>
        </div>
    </header>;
}
