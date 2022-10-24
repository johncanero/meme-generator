import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter flex justify-center mt-12">
      <button className="counter--minus mx-6" onClick={subtract}>
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus mx-6" onClick={add}>
        +
      </button>
    </div>
  );
};

export default Counter;
