// App.js
import React from "react";
import CountyList from "./components/CountyList/CountyList.jsx";
import SenateDistrictList from "./components/SenateDistrictList/SenateDistrictList.jsx";

function App() {
  return (
    <div className="App">
      <CountyList />
      <SenateDistrictList />
    </div>
  );
}

export default App;
