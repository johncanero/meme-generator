import React from "react";

const State = () => {
  const [isImportant, setIsImportant] = React.useState("Yes");

  const handleClick = () => {
    setIsImportant("No");
  }

  return (
    <div className="state text-center mt-12">
      <h1 className="state--title">Is state important to know?</h1>
      <div className="state--value" onClick={handleClick}>
        <h1>{isImportant}</h1>
      </div>
    </div>
  );
};

export default State;