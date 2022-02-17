import "../assets/CSS/Card.css";

const Card = (character) => {
  // console.log("log de character", character.character.comics);

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

      <div>
        {character.character.comics.map((comics, index) => {
          return (
            <img
              src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};
export default Card;
