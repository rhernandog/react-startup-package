import React from "react";
import auroraImg from "./assets/images/aurora-borealis.jpg";

const App = () => {
  return <div className="wrapper">
    <div className="content">
      <h1 className="text-center">React Base App</h1>
      <p className="lead"></p>
      <hr />
      <img src={auroraImg} alt="Aurora Borealis" height="400" />
    </div>
  </div>;
};

export default App;
