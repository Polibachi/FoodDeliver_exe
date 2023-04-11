import React, { useState } from "react";

function Test() {
  const state = useState(0);
  //console.log(state);
  let likes = 0;
  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={() => (likes += 1)}>dodati</button>
      <button onClick={() => (likes -= 1)}>vidnyati</button>
    </div>
  );
}
export default Test;
