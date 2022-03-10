import "../assets/CSS/Cards.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Cards = ({ characters }) => {
  // console.log("characters=>", characters);
  // const [characterId, setCharacterId] = useState();
  const userId = Cookies.get("userId");

  const handleAddToFavorites = async (event) => {
    // setCharacterId(characters);
    console.log("characters==>", characters);
    console.log("userId==>", userId);
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:3001/favorites", {
        characters: characters,
        userId: userId,
      });
    } catch (error) {}
  };
  // console.log("characterId=>", characterId);
  return (
    <div className="cards-background ">
      <div className="container">
        <div className="link-2">
          <Link to={`/character/${characters._id}`}>
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
          <div>
            <FontAwesomeIcon
              icon="hand-fist"
              onClick={() => console.log("ça clique")}
              onClick={handleAddToFavorites}
              color={"white"}
            />
          </div>
        </div>
        {/* <div>
          <FontAwesomeIcon
            icon="hand-fist"
            onClick={() => console.log("ça clique")}
            color={"white"}
          />
        </div> */}
      </div>
    </div>
  );
};
export default Cards;
