import "../assets/CSS/Cards.css";
import { Link } from "react-router-dom";

const Cards = ({ characters }) => {
  console.log("description ====>", characters.description);
  return (
    <div className="container">
      {/* <Link to={}>
        
      </Link> */}
      <div className="each-card">
        <div>
          <div className="each-top">
            <img
              className="each-mugshot"
              src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}
              alt=""
            />
            <div className="each-description">
              <p className="secret">{characters.description}</p>
            </div>
          </div>

          <div className="each-name">{characters.name}</div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
