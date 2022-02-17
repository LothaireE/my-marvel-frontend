// à venir
import marvelbanner from "../assets/pictures/marvelbanner.jpeg";
import "../assets/CSS/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-block">
      <div className="header-bars">
        <div className="header-top-bar">
          <Link to={"/"}>
            <img className="header-banner" src={marvelbanner} alt="" />
          </Link>
        </div>
        <div className="header-down-bar">
          <Link to={"/characters"}>Personnages</Link>
          <Link to={"/comics"}>Comics</Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
