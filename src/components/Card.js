import "../assets/CSS/Card.css";

const Card = (character) => {
  // console.log("log de character", character.character.comics);

  console.log("=====>", character);

  return (
    <div className="card-block">
      <div className="character">
        <div className="character-name">
          <h1>{character.character.name}</h1>
        </div>

        <div className="character-pic">
          <img
            src={`${character.character.thumbnail.path}.${character.character.thumbnail.extension}`}
            alt="character"
          />
        </div>
      </div>

      <div className="comics-scroll">
        {character.character.comics.map((comics, index) => {
          return (
            <div className="test">
              <div className="test-two">
                <img
                  className="comics-scroll-cover"
                  src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
