import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import "../assets/CSS/Character.css";

const Character = ({ apiUrl }) => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fectchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/comics/${id}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fectchData();
  }, [apiUrl, id]);

  return isLoading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="page-background">
      <div className="container">
        <div className="card-block">
          <Card character={data} />
        </div>
      </div>
    </div>
  );
};

export default Character;
