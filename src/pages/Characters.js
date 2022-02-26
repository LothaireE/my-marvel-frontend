import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import "../assets/CSS/Characters.css";
const Characters = ({ apiUrl }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  console.log(search);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // `${apiUrl}/characters?name=${search}&limit=${limit}&page=${page}`

        const response = await axios.get(`${apiUrl}/characters?name=${search}`);
        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [apiUrl, search]);
  return isLoading ? (
    <div>
      <h1>Stark Industrie</h1>
    </div>
  ) : (
    <div className="full-background">
      <div className="characters-page-background">
        <div className="page-background-pic">
          <div className="container">
            <div className="searchbar">
              <input
                className="searchbar-input"
                placeholder="Need a hero ?"
                type="text"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  console.log(event.target.value);
                }}
              />
            </div>

            {/* <div>
        <button onClick={() => setPage(page - 1)}>Page précédente</button>
        <button onClick={() => setPage(page + 1)}>Page suivante</button>
      </div> */}

            <div className="cards-container">
              {data.results.map((characters, index) => {
                console.log("data.results ===>", data.results);
                return (
                  <div key={characters._id}>
                    {characters.thumbnail.path !==
                    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                      <div className="cards-block">
                        <Cards characters={characters} />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Characters;
