import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  delete data.address;
  console.log(data)
  return <div>{JSON.stringify(data)}</div>;
}

export default Details;
