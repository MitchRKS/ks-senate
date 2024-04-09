import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SingleCounty.css";
const SingleCounty = () => {
  const [oneCounty, setOneCounty] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API when component mounts
    axios
      .get(`http://localhost:3001/api/counties/${_id}`)
      .then((response) => {
        setOneCounty(response.data);
        console.log(oneCounty);
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

  return <div className="card-container">{oneCounty._id}</div>;
};

export default SingleCounty;
