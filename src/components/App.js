import React, { useState } from "react";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <button onClick={() => setResource("posts")}>Post</button>
      <button onClick={() => setResource("todos")}>Todos</button>

      <div>Todos</div>
      {resource}
    </div>
  );
};

export default App;
