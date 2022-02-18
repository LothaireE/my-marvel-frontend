import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Cards from "../components/Cards";

const Home = ({ apiUrl }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  console.log(search);
  useEffect(() => {
    const fetchData = async () => {
      try {
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

export default Home;
