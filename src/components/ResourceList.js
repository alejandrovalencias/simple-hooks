import React from "react";
import axios from "axios";
import useResource from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResource(resource);
  return (
    <ul>
      {resources.map((c) => (
        <li key={c.id}>{c.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
