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
      <button onClick={toggleComponent}>Switch View</button>
      {toggle ? <CountyList /> : <SenateDistrictList />}
    </div>
  );
}

export default App;
