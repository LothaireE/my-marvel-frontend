import "../assets/CSS/Cards.css";
import { Link } from "react-router-dom";

const Cards = ({ characters }) => {
  // console.log("description ====>", characters._id);
  return (
    <div className="container">
      <Link className="link-2" to={`/character/${characters._id}`}>
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
      </Link>
    </div>
  );
};
export default Cards;
