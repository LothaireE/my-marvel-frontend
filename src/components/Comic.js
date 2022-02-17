import "../assets/CSS/Comic.css";

const Comic = ({ newComics }) => {
  return (
    <div className="container">
      <div>
        <div className="each-comic">
          <div className="comic-info">
            <div className="comic-title">
              <h1>{newComics.title}</h1>
            </div>
            <div className="comic-text">
              <p>{newComics.description}</p>
            </div>
          </div>
          <div className="cover-bord">
            <img
              className="comic-cover"
              src={`${newComics.thumbnail.path}.${newComics.thumbnail.extension}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comic;
