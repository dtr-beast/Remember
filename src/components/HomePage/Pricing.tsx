import React from "react";

export default function Pricing() {
  return <section about="Pricing" className="container">
    <div className="pricing-section">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Pricing</h1>
      <div className="pricing-container">
        <div className="pricing-blanter-column ">
          <img
          src="https://2.bp.blogspot.com/-HWl2PCk1T_g/XqqDylYxjCI/AAAAAAAAONY/h6Yr9fkzWhQ35ob37L9PnxiX7ExTmns1gCLcBGAsYHQ/s50/basic.png"
          alt="Basic" />
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
             href="" title="#"
             target="_blank">Buy Now</a>
        </div>
        <div className="pricing-blanter-column"><img
          src="https://2.bp.blogspot.com/-KVVFsnJlM9E/XqqD0Qo0KDI/AAAAAAAAONg/FIn1BXo4PU8xX12gCac755x9vXDHOfVvQCLcBGAsYHQ/s50/personal.png"
          alt="Personal" />           <h3>Personal</h3>
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
             href="" title="#"
             target="_blank">Buy Now</a>
        </div>
        <div className="pricing-blanter-column"><img
          src="https://2.bp.blogspot.com/-QoGlZN-t_fQ/XqqDzmE276I/AAAAAAAAONc/AG5ZXRxQo9Q24-LVUtdg_Jf3Za0kZqacACLcBGAsYHQ/s50/developer.png"
          alt="Developer" />           <h3>Enterprise</h3>
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
             href="" title="#"
             target="_blank">Buy Now</a>
        </div>
      </div>
    </div>
  </section>;
}
