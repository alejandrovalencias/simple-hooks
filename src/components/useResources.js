import React, { useState, useEffect } from "react";
import axios from "axios";

const useResources = (resource) => {
  const [resources, setResource] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setResource(data);
    })(resource);
  }, [resource]);
  return resources;
};

export default useResources;
