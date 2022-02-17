import axios from "axios";
import { useEffect, useState } from "react";
import Comic from "../components/Comic";
import { Params } from "react-router-dom";

const Comics = ({ apiUrl }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/comics?title=${search}`);
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
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="container">
      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            console.log(event.target.value);
          }}
        />
      </div>
      <div className="comics-block">
        {data.results.map((newComics, index) => {
          return (
            <div key={index}>
              <Comic newComics={newComics} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Comics;
