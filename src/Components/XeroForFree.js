import "./XeroForFree.css";

const XeroForFree = () => {
  return (
    <>
      <div className="XeroSection">
        <div className="mainSection">
          <h1> Start using Xero for free </h1>
          <div>
            <p>
              Access all Xero features for 30 days, then decide which plan best
              suits your business.
            </p>
          </div>

          <div className="emailSection">
            <p> Email address </p>
            <form>
              <input type="email"></input>
              <button type="submit">Start your free trail</button>
            </form>
          </div>

          <div>
            <p>
              Or
              <a href="https://www.xero.com/nz/pricing-plans/">
                {" "}
                compare plans from $29 a month{" "}
              </a>{" "}
            </p>
          </div>
        </div>

        <div className="lineItems">
          <ul className="List">
            <div className="Item">
            <li> "Safe and secure" </li>
            </div>
            <div className="Item">
            <li> "Cancel anytime" </li>
            </div>
            <div className="Item">
            <li> "24/7 online support" </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default XeroForFree;
