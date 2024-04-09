// App.js
import React from "react";
import { useState } from "react";
import CountyList from "./components/CountyList/CountyList.jsx";
import SenateDistrictList from "./components/SenateDistrictList/SenateDistrictList.jsx";

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleComponent = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <div className="App">
      {toggle ? <CountyList /> : <SenateDistrictList />}
      <div className="Heading">Kansans First Election Datacenter</div>
      <button onClick={toggleComponent}>Switch View</button>
    </div>
  );
}

export default App;
