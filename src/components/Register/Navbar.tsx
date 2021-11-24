import {Link} from "react-router-dom";
import React from "react";

export default function Navbar() {
    return <header className="text-gray-600 body-font bg-white w-full z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
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
        </div>
    </header>;
}