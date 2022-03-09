// à venir
import "../assets/CSS/Header.css";
import marvelbannertwo from "../assets/pictures/marvelbannertwo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-block">
      <div className="header-bars">
        <div className="header-top-bar">
          <Link className="link-1" to={"/"}>
            <img className="header-banner" src={marvelbannertwo} alt="" />
          </Link>
        </div>
        <div className="header-down-bar">
          <Link className="link-1" to={"/characters"}>
            Personnages
          </Link>
          <Link className="link-1" to={"/comics"}>
            Comics
          </Link>
          <Link className="link-1" to={"/signup"}>
            S'inscrire
          </Link>
          <Link className="link-1" to={"/signin"}>
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
