import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SenateDistrictList.css";
const SenateDistrictList = () => {
  const [senateDistricts, setSenateDistricts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API when component mounts
    axios
      .get("http://localhost:3001/api/senatedistricts")
      .then((response) => {
        setSenateDistricts(response.data);

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

  return (
    <div className="card-container">
      {senateDistricts.map((item) => (
        <div key={item._id} className="card">
          <h2>
            <a href={`/senatedistricts/${item._id}`}>{item._id}</a>
          </h2>
          <ul>
            <li>
              <strong>Registered Republicans:</strong> {item.GOP}
            </li>
            <li>
              <strong>Registered Independents:</strong> {item.IND}
            </li>
            <li>
              <strong>Registered Democrats:</strong> {item.DEM}
            </li>
            <li>
              <strong>Registered Voters:</strong> {item.POP}
            </li>
            <li>
              <strong>Value Them Both:</strong> {item.VTBY}
            </li>
            {/* Add more fields as needed */}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SenateDistrictList;
