import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Address() {
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
  return <div>{JSON.stringify(data.address)}</div>;
}

export default Address;
