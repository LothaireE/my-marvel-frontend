// à venir
import marvelbanner from "../assets/pictures/marvelbanner.jpeg";
import "../assets/CSS/Header.css";

const Header = () => {
  return (
    <div className="header-block">
      <div className="header-bars">
        <div className="header-top-bar">
          <img className="header-banner" src={marvelbanner} alt="" />
        </div>
        <div className="header-down-bar">inputs à venir</div>
      </div>
    </div>
  );
};
export default Header;
