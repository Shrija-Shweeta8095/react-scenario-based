import React from "react";

function ScenarioThree({ getDataFromChild }) {
  const handleClick = () => {
    getDataFromChild("Hello");
  };
  return (
    <div>
      <button onClick={handleClick}>Get Data from Child</button>
    </div>
  );
}

export default ScenarioThree;
