import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <h1>Counter App</h1>
        <div className="my-5">
          <h2 className="my-5">{count}</h2>
          <button className="btn btn-success mx-3" onClick={() => setCount(count + 1)}>BUTTON</button>
          <div className="my-5">
            <button className="btn btn-success mx-3">BUTTON TO GO TO NEXT PAGE</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Counter;
