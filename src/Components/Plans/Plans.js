import React from "react";
import "./Plans.css";
import PlanPrice from "./PlanPrice";

const Plans = () => {
  return (
    <>
      <div className="Title">
        <h1>Plans to suite your business.</h1>
      </div>
      <div className="subtext">
        <p>
          All pricing plans cover the accounting essentials, with room to grow.
        </p>
      </div>

      <div className="list">
        <ul>
          <li>
            <h3>Safe and Secure</h3>
          </li>
          <li>
            <h3>Cancel with one moths notice</h3>
          </li>
          <li>
            <h3>24/7 online support</h3>
          </li>
        </ul>
      </div>

      <div>
        <p>
          Starter, Standard and Premium plan prices are changing on 15 September
          2022.{" "}
          <link to="https://www.xero.com/nz/pricing-plans/update/">
            Find out more
          </link>
        </p>
      </div>

      <div>
        <h4>Offer Terms</h4>
          <p>
          Prices are in NZD excluding GST. Xero reserves the right
          to change pricing at any time.</p>
          <p>Hubdoc is included in Xero Starter,
          Standard and Premium plans as long as it’s connected to your Xero
          subscription. Your use of the Xero services is subject to the Xero
          Terms of Use and your use of the Hubdoc services is subject to the
          Hubdoc Terms of Use.
          </p>
          <p>†Invoice limits for the Starter plan apply to
          both approving and sending invoices. Transactions initiated by app
          partners may automatically contribute to your invoice limit.</p>
          <p>
          ^Analytics Plus is available as an add on to all Starter, Standard and
          Premium plans. The price is per organisation per month.
          </p>
      </div>

      <div>
        <h2>Frequently Asked Questions</h2>
      </div>
    </>
  );
};

export default Plans;
