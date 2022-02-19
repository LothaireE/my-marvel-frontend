import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Cards from "../components/Cards";

const Characters = ({ apiUrl }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  // const [page, setPage] = useState(1);
  // console.log("page ====>", page);
  // console.log("data ====>", data);

  // const limit = 100;

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

    // rajouter page dans le tableau avec apiUrl et search
  }, [apiUrl, search]);
  return isLoading ? (
    <div>
      <h1>Stark Industrie</h1>
    </div>
  ) : (
    <div className="container">
      <h1>Choose your hero</h1>
      <input
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          console.log(event.target.value);
        }}
      />
      {/* <div>
        <button onClick={() => setPage(page - 1)}>Page précédente</button>
        <button onClick={() => setPage(page + 1)}>Page suivante</button>
      </div> */}

      <div className="cards-container">
        {data.results.map((characters, index) => {
          return (
            <div key={characters._id}>
              <div className="cards-block">
                <Cards characters={characters} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Characters;
