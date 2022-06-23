import Logo from "./Logo";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="headerContainer">
        <Logo />
        <div className="headerLineItems">
            <ul>
                <li>
                    <Link to="./Features/Feature">Features</Link>
                </li>
                <li>
                    <Link to="../Plans/Plans">Plans</Link>
                </li>
                <li>
                    <Link to="https://www.xero.com/nz/">For small business</Link>
                </li>
                <li>
                    <Link to="https://www.xero.com/nz/">Support</Link>
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