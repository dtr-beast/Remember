import {Link} from "react-router-dom";
import React, {useState} from "react";

export function Navbar() {
    const [hidden, setHidden] = useState('hidden')

    return <header>
        <nav
            className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
        >
            <div>
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900">
                        <span className="ml-3 text-3xl text-indigo-500 italic">Remember</span>
                    </Link>
            </div>
            <div className={`${hidden} w-full lg:flex md:items-center md:w-auto`} id="menu">
                <ul
                    className="
              text-base text-gray-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0"
                >
                    <li>
                        <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Features</a>
                    </li>
                    <li>
                        <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Common Uses</a>
                    </li>
                    <li>
                        <a className="md:p-4 py-2 block hover:text-purple-400" href="#">For Teams</a>
                    </li>
                    <li>
                        <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Pricing</a>
                    </li>
                    <li>
                        <Link to="/login" style={{textDecoration: "none"}}>
                            <a
                                // className="mr-5 hover:text-gray-900"
                                className="md:p-4 py-2 block hover:text-purple-400"
                            >Login</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" style={{textDecoration: "none"}}>
                            <button
                                // className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                className="px-8 mt-2 py-2 block hover:bg-indigo-600 bg-indigo-500 text-white rounded-3xl"
                            >Sign
                                Up!
                            </button>

                        </Link>
                    </li>
                </ul>
            </div>
            <svg
                xmlns="<http://www.w3.org/2000/svg>"
                id="menu-button"
                className="h-6 w-6 cursor-pointer ld:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setHidden((val) => {
                    if (val === 'hidden') {
                        console.log('State 0')
                        return ''
                    }
                    console.log('State Hidden')
                    return 'hidden'
                })}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </nav>
    </header>
    return <header className="flex justify-between text-gray-600 body-font bg-white w-full fixed z-10">
        <div className="hidden md:flex md:items-center md:w-auto space-x-7 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
            <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span className="ml-3 text-3xl text-indigo-500 italic">Remember</span>
            </Link>

            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900">Features</a>
                <a className="mr-5 hover:text-gray-900">Common Uses</a>
                <a className="mr-5 hover:text-gray-900">For Teams</a>
                <a className="mr-5 hover:text-gray-900">Pricing</a>
            </nav>
            <Link to="/login" style={{textDecoration: "none"}}>
                <a className="mr-5 hover:text-gray-900">Login</a>
            </Link>

            <Link to="/signup" style={{textDecoration: "none"}}>
                <button
                    className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign
                    Up!
                </button>

            </Link>
        </div>
        <button>
            Hello
        </button>
        <button onClick={() => setHidden((val) => {
            if (val === 'hidden') {
                console.log('State 0')
                return ''
            }
            console.log('State Hidden')
            return 'hidden'
        })}>

            <svg
                xmlns="<http://www.w3.org/2000/svg>"
                id="menu-button"
                className="h-6 w-6 cursor-pointer lg:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>
    </header>;
}
