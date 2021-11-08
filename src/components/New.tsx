import React from "react";
import '../index.css';
import './new.css';
import {Link} from "react-router-dom";
import {Button, Typography} from "@mui/material";
import Cards from "./Cards";

export default function New() {
    return(
      <>
          <header className="text-gray-600 body-font">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
                           stroke-linejoin="round" stroke-width="2"
                           className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                      <span className="ml-3 text-xl">Remember</span>
                  </a>
                  <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                      <a className="mr-5 hover:text-gray-900">Features</a>
                      <a className="mr-5 hover:text-gray-900">Common Uses</a>
                      <a className="mr-5 hover:text-gray-900">For Teams</a>
                      <a className="mr-5 hover:text-gray-900">Pricing</a>
                  </nav>
                  <Link to="/login" style={{textDecoration: "none"}}>
                      <Button style={{textTransform: "none"}}>
                          <Typography variant="h6" color="inherit" component="div"
                                      style={{fontVariant: "small-caps", fontWeight: "bold"}}>
                              Login
                          </Typography>
                      </Button>
                  </Link>
                  <Button style={{
                      textTransform: "none",
                      backgroundColor: "#0077B6",
                      borderRadius: 10,
                      marginLeft: 20,
                      marginRight: 40
                  }}>
                      <Link to="/signup" style={{textDecoration: "none"}}>
                          <Typography variant="h6" color="inherit" component="div"
                                      style={{fontVariant: "small-caps", fontWeight: "bold", color: "white"}}>
                              Sign Up
                          </Typography>
                      </Link>

                  </Button>
              </div>
          </header>





          <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="text-xxl-center text-indigo-500 tracking-widest font-medium title-font mb-1">Online Mind Mapping</h1>
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">It all starts with an idea.</h1>
              </div>
          </div>



          <div className="container">
              <div className="pricing-section">
                  <div className="pricing-container">
                      <div className="pricing-blanter-column">
                          <img
                              src='https://2.bp.blogspot.com/-HWl2PCk1T_g/XqqDylYxjCI/AAAAAAAAONY/h6Yr9fkzWhQ35ob37L9PnxiX7ExTmns1gCLcBGAsYHQ/s50/basic.png'
                              alt='Basic'/>
                          <h3>Basic</h3>
                          <div className="pricing-tag">20% off</div>
                          <div className="blanter-price">Rp 150.000</div>
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
                             title="#" target="_blank">Order Sekarang</a>
                      </div>
                      <div className="pricing-blanter-column">
                          <img
                              src='https://2.bp.blogspot.com/-KVVFsnJlM9E/XqqD0Qo0KDI/AAAAAAAAONg/FIn1BXo4PU8xX12gCac755x9vXDHOfVvQCLcBGAsYHQ/s50/personal.png'
                              alt='Personal'/>
                          <h3>Personal</h3>
                          <div className="pricing-tag">Best Value</div>
                          <div className="blanter-price">Rp 220.000</div>
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
                             title="#" target="_blank">Order Sekarang</a>
                      </div>
                      <div className="pricing-blanter-column">
                          <img
                              src='https://2.bp.blogspot.com/-QoGlZN-t_fQ/XqqDzmE276I/AAAAAAAAONc/AG5ZXRxQo9Q24-LVUtdg_Jf3Za0kZqacACLcBGAsYHQ/s50/developer.png'
                              alt='Developer'/>
                          <h3>Developer</h3>
                          <div className="pricing-tag">For Business</div>
                          <div className="blanter-price">Rp 999.000</div>
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
                             title="#" target="_blank">Order Sekarang</a>
                      </div>
                  </div>
              </div>
          </div>

          <Cards/>

      </>
    )
}
