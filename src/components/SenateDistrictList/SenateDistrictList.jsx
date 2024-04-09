import React, { useState, useEffect } from "react";
import axiosInstance from "../../utilities/axiosInstance";
import "./SenateDistrictList.css";
import axiosInstance from "../../utilities/axiosInstance";
const SenateDistrictList = () => {
  const [senateDistricts, setSenateDistricts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API when component mounts
    axiosInstance
      .get(`${baseURL}/api/senatedistricts`)
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
          <h2>{item._id}</h2>
          <ul>
            <li>
              <strong>Incumbent:</strong> {item.Incumbent}
            </li>
            <li>
              <strong>Cash on Hand:</strong> ${item.COH}
            </li>
            <li>
              <strong>MOD:</strong> {item.MOD}
            </li>
            <li>
              <strong>CON:</strong> {item.CON}
            </li>
            <li>
              <strong>MAGA:</strong> {item.MAGA}
            </li>
            <li>
              <strong>2024 Vote Target:</strong> {item.Target}
            </li>
            <li>
              <strong>Registered Voters:</strong> {item.RV}
            </li>
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
              <strong>Abortion Amendment "Yes":</strong> {item.VTBY}
            </li>
            <li>
              <strong>Abortion Amendment "NO":</strong> {item.VTBN}
            </li>
            <li>
              <strong>2022 Primary Turnout:</strong> {item.PTO22}
            </li>
            <li>
              <strong>2022 Primary Margin</strong> {item.Margin22}
            </li>
            <li>
              <strong>2020 Primary Turnout:</strong> {item.PTO20}
            </li>
            <li>
              <strong>2020 Primary Margin</strong> {item.Margin20}
            </li>
            <li>
              <strong>2016 Primary Turnout:</strong> {item.PTO16}
            </li>
            <li>
              <strong>2016 Primary Margin</strong> {item.Margin16}
            </li>
            <li>
              <strong>2012 Primary Turnout:</strong> {item.PTO12}
            </li>
            <li>
              <strong>2012 Primary Margin</strong> {item.Margin12}
            </li>
            {/* Add more fields as needed */}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SenateDistrictList;
