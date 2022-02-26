import "../assets/CSS/Cards.css";
import { Link } from "react-router-dom";

const Cards = ({ characters }) => {
  return (
    <div className="cards-background ">
      <div className="container">
        <div>
          <Link className="link-2" to={`/character/${characters._id}`}>
            <div className="each-card">
              <div className="each-card-center">
                <div className="each-top">
                  <div className="each-mugshot">
                    <img
                      className="mugshot"
                      src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}
                      alt=""
                    />
                  </div>

                  <div className="each-description">
                    {characters.description === "" ? (
                      <p className="secret">
                        Unfortunatly we do not have enough information
                        concerning
                        <span> {characters.name}</span>'s identity.
                      </p>
                    ) : (
                      <p className="secret">{characters.description}</p>
                    )}
                  </div>
                </div>

                <div className="each-name">{characters.name}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cards;
