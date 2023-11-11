/** @format */

import React, { useState } from "react";

const styleCard = {
  margin: "3rem",
  padding: "5px",
  border: "2px solid gray",
  background: "lightgray",
  textAlign: "center",
};

function App() {
  const [count, setCount] = useState(0);
  return (
    <div
      className="container"
      style={styleCard}>
      <div className="card">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="count2">
            <h2>{count}</h2>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
              style={{
                background: "green",
                margin: "20px",
                padding: "10px",
                borderRadius: "5px",
              }}>
              Increment!
            </button>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
              style={{
                background: "red",
                margin: "20px",
                padding: "10px",
                borderRadius: "5px",
              }}>
              Decrement!
            </button>
            <button
              onClick={() => {
                setCount(0);
              }}
              style={{
                background: "lightblue",
                margin: "20px",
                padding: "10px",
                borderRadius: "5px",
              }}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
