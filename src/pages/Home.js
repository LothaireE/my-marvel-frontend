import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";

const Home = ({ apiUrl }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //ajouter des backtick et $ lorsque jaurai des query dans mon url
        const response = await axios.get(`${apiUrl}/characters`);
        // console.log("soooooooo", response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return isLoading ? (
    <div>
      <h1>Stark Industrie</h1>
    </div>
  ) : (
    <div className="container">
      <h1>Choose your hero</h1>
      <div className="cards-container">
        {data.results.map((characters, index) => {
          return (
            <div key={characters._id}>
              <div className="card-block">
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
