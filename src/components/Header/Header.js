import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to={"/"}>
        <h2 className="title">TOUR GUIDE FINDER</h2>
      </Link>
    </div>
  );
};

export default Header;
