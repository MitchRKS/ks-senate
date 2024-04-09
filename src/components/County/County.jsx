import React, { useState, useEffect } from "react";
import axios from "axios";
import "./County.css";
const County = () => {
  const [county, setCounty] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API when component mounts
    axios
      .get(`http://localhost:3001/api/counties/${_id}`)
      .then((response) => {
        setCounty(response.data);
        console.log(counties);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return <div>{county._id}</div>;
};
export default County;
