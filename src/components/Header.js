// à venir
import "../assets/CSS/Header.css";
import marvelbannertwo from "../assets/pictures/marvelbannertwo.png";
import { useNavigate, Link } from "react-router-dom";

const Header = ({ setUser, token }) => {
  const navigate = useNavigate();
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
          {token ? (
            <button
              onClick={() => {
                setUser(null);
                navigate("/");
              }}
              className="link-1"
            >
              Se deconnecter
            </button>
          ) : (
            <div className="signBlockRight">
              <div>
                <Link className="link-1" to={"/signup"}>
                  S'inscrire
                </Link>
              </div>

              <div>
                <Link className="link-1" to={"/signin"}>
                  Se connecter
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
