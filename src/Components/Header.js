import Logo from "./Logo";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
        <Logo />
        <div className="headerLineItems">
            <ul>
                <li>
                    <a href="https://www.xero.com/nz/">Features</a>
                </li>
                <li>
                    <a href="https://www.xero.com/nz/pricing-plans/">Plans</a>
                </li>
                <li>
                    <a href="https://www.xero.com/nz/">For small business</a>
                </li>
                <li>
                    <a href="https://www.xero.com/nz/">Support</a>
                </li>
            </ul>
        </div>
        <div className="headerButtons">  
            <div className="tryButton">
            <button type ="button">Try Xero for free</button>
            </div>
            <div className="logButton">
            <button type ="button">LOG IN</button>
            </div>
        </div>
    </div>
    
  );
};

export default Header;