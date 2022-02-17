// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const Characters = ({ apiUrl }) => {
  //   const { id } = useParams();
  //   const [data, setData] = useState();
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     const fectchData = async () => {
  //       try {
  //         const response = await axios.get(`${apiUrl}/comics/${id}`);
  //         console.log("soooooooo", response.data);

  //         setData(response.data);
  //         setIsLoading(false);
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //       fectchData();
  //     };
  //   }, [id]);

  return (
    <div>
      <h1>Characters</h1>
    </div>
  );
};
export default Characters;
