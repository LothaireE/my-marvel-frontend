import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Character = ({ apiUrl }) => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log("L'ID ===> ", id);
  useEffect(() => {
    const fectchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/comics/${id}`);

        console.log("response====+>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fectchData();
  }, [id]);

  return isLoading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div>
      <h1> Character chosen </h1>
    </div>
  );
};

export default Character;
