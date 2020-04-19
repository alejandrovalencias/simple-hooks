import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResource] = useState([]);

  useEffect(() => {
    fecthReource(resource);
  }, [resource]);

  const fecthReource = async (resource) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResource(data);
  };

  console.log(resources);
  return (
    <div>
      <div>{resources.length}</div>
      <div>{resource}</div>
    </div>
  );
};

export default ResourceList;
