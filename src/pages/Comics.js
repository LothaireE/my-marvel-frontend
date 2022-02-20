import axios from "axios";
import { useEffect, useState } from "react";
import Comic from "../components/Comic";

const Comics = ({ apiUrl }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("1");
    const fetchData = async () => {
      console.log("2");
      try {
        console.log("2.1");
        const response = await axios.get(`${apiUrl}/comics?title=${search}`);
        console.log("3");
        setData(response.data);
        console.log("4");
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
    <div className="page-background">
      <div className="container">
        <div className="searchbar">
          <input
            className="searchbar-input"
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
                <div className="que">
                  <Comic newComics={newComics} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Comics;
