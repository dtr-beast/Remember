import React from "react";
import '../index.css';
import './New.css';
import {Link} from "react-router-dom";
import {Button, Typography} from "@mui/material";
import Cards from "./Cards";
import Stub from "../assets/images/MinimalistStoryMindMapWhiteBG.webp"

function PricingSection() {
    return <section className="container">
        <div className="pricing-section">
            <h1 style={{fontSize: "3em", color: "white"}}>Explore Pricing</h1>
            <div className="pricing-container">
                <div className="pricing-blanter-column">
                    <img
                        src="https://2.bp.blogspot.com/-HWl2PCk1T_g/XqqDylYxjCI/AAAAAAAAONY/h6Yr9fkzWhQ35ob37L9PnxiX7ExTmns1gCLcBGAsYHQ/s50/basic.png"
                        alt="Basic"/>
                    <h3>Basic</h3>
                    <div className="pricing-tag">20% off</div>
                    <div className="blanter-price">Rs 1500</div>
                    <div className="service-info">
                        <ul>
                            <li>Documentation</li>
                            <li>Premium Template</li>
                            <li>1 License</li>
                            <li>Full Optimization</li>
                            <li>1 Month Full Support</li>
                            <li>Easy Customize</li>
                            <li>-</li>
                        </ul>
                    </div>
                    <a className="blanter-order-btn"
                       href="https://www.idblanter.com/2019/08/blanter-tokoshop-template-toko-online-terbaik.html"
                       title="#" target="_blank">Buy Now</a>
                </div>
                <div className="pricing-blanter-column">
                    <img
                        src="https://2.bp.blogspot.com/-KVVFsnJlM9E/XqqD0Qo0KDI/AAAAAAAAONg/FIn1BXo4PU8xX12gCac755x9vXDHOfVvQCLcBGAsYHQ/s50/personal.png"
                        alt="Personal"/>
                    <h3>Personal</h3>
                    <div className="pricing-tag">Best Value</div>
                    <div className="blanter-price">Rs 2200</div>
                    <div className="service-info">
                        <ul>
                            <li>Documentation</li>
                            <li>Premium Template</li>
                            <li>3 License</li>
                            <li>Full Optimization</li>
                            <li>3 Month Full Support</li>
                            <li>Easy Customize</li>
                            <li>-</li>
                        </ul>
                    </div>
                    <a className="blanter-order-btn"
                       href="https://www.idblanter.com/2019/08/blanter-tokoshop-template-toko-online-terbaik.html"
                       title="#" target="_blank">Buy Now</a>
                </div>
                <div className="pricing-blanter-column">
                    <img
                        src="https://2.bp.blogspot.com/-QoGlZN-t_fQ/XqqDzmE276I/AAAAAAAAONc/AG5ZXRxQo9Q24-LVUtdg_Jf3Za0kZqacACLcBGAsYHQ/s50/developer.png"
                        alt="Developer"/>
                    <h3>Enterprise</h3>
                    <div className="pricing-tag">For Business</div>
                    <div className="blanter-price">Rs 5000</div>
                    <div className="service-info">
                        <ul>
                            <li>Documentation</li>
                            <li>Premium Template</li>
                            <li>Unlimited License</li>
                            <li>Full Optimization</li>
                            <li>6 Month Full Support</li>
                            <li>Easy Customize</li>
                            <li>1 Bonus Template</li>
                        </ul>
                    </div>
                    <a className="blanter-order-btn"
                       href="https://www.idblanter.com/2019/08/blanter-tokoshop-template-toko-online-terbaik.html"
                       title="#" target="_blank">Buy Now</a>
                </div>
            </div>
        </div>
    </section>;
}

export default function New() {
    return (
        <>
            {/*TODO: Fix the navbar to top */}
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-3xl" style={{fontFamily: "Lemonada", color: "blue"}}>Remember</span>
                    </a>
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
                            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up!
                        </button>

                    </Link>
                </div>
            </header>

            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-xxl-center text-6xl text-indigo-500 tracking-widest title-font mb-1 fs-1">Online
                        mind map maker</h1>
                    <h1 className="sm:text-3xl  font-medium title-font mb-4 text-gray-900 italic">It all starts with an
                        idea.</h1>
                </div>
            </div>
            {/*<Cards/>*/}
            <section className="text-gray-600 body-font">
                <div className="mx-auto flex flex-col text-center w-full ">
                    <h2 className="text-xxl-center text-2xl text-indigo-700 tracking-widest fs-1">Features</h2>
                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div
                        className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div
                            className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Mind maps structure
                                information</h2>
                            <p className="leading-relaxed text-base">Mind maps are graphical representations of
                                information that convey the relationship between individual ideas and concepts. No
                                matter how complex or broad a subject is, a mind map brings order to the chaos and helps
                                you see the 'bigger picture'.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Mind Maps improve
                                memory</h2>
                            <p className="leading-relaxed text-base">Mind maps utilize a number of memory triggers such
                                as colors and images. These are much easier for your brain to memorize and recall than
                                pure text. Additionally, mind maps help you connect new pieces of information with
                                existing knowledge.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div
                            className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div
                            className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Mind Maps foster
                                creativity</h2>
                            <p className="leading-relaxed text-base">There are very few techniques out there that have
                                the ability to get your creative juices flowing like mind mapping. That is because mind
                                maps use images and keywords to create new associations in your brain, which you can
                                also transcribe with incredible speed.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Mind maps facilitate
                                collaboration</h2>
                            <p className="leading-relaxed text-base">While traditional paper mind maps are great for
                                developing ideas by yourself, online mind maps enable you to brainstorm with other
                                people and plan together in real-time, no matter where people are located or which
                                device they’re using.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div
                            className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                    </div>
                    <button
                        className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button
                    </button>
                </div>
            </section>

            <div className="bg-gray-900">
                <PricingSection/>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
                    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY
                            POLAROID</h2>
                        <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac
                            Heirloom</h1>
                    </div>
                    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                        <button
                            className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6"
                                 viewBox="0 0 512 512">
                                <path
                                    d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                            </svg>
                            <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
          <span className="title-font font-medium">Google Play</span>
        </span>
                        </button>
                        <button
                            className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6"
                                 viewBox="0 0 305 305">
                                <path
                                    d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"/>
                                <path
                                    d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"/>
                            </svg>
                            <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-600 mb-1">Download on the</span>
          <span className="title-font font-medium">App Store</span>
        </span>
                        </button>
                    </div>
                </div>
            </section>
            <footer className="text-gray-400 bg-gray-900 body-font">
                <div
                    className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <p className="ml-3 text-xl">Remember</p>
                        <p className="mt-2 text-sm text-gray-500">Online Mind Mapping Website.</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Remember</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-400 hover:text-white">Features</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Pricing</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Business</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Education</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Integration</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Apps</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">About us</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-400 hover:text-white">Company</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Jobs</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Partners</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Developers</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Press</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Contacts</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Support</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-400 hover:text-white">Help Center</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Tutorial Videos</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Training</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Security</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">FAQs</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Useful
                                Links</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-400 hover:text-white">Public Maps</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Blog</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Videos</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 bg-opacity-75">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-400 text-sm text-center sm:text-left">© 2021 Remember
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5"
               viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5"
               viewBox="0 0 24 24">
            <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
               className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-400">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"
               className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
                    </div>
                </div>
            </footer>
        </>
    )
}
