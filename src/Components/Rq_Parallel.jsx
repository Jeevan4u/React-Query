import React from "react";
import API from "../Api/API";
import { isError, useQuery } from "react-query";

const fetchSuperHero = () => {
  return API.get("/SuperHeros");
};
const fetchFreinds = () => {
  return API.get("/Freinds");
};

const Rq_Parallel = () => {
  const {
    data: superHero,
    isLoading,
    isFetching,
    isError,
  } = useQuery("super-hero", fetchSuperHero);
  const { data: freinds } = useQuery("freinds", fetchFreinds);

  if (isLoading || isFetching) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1> Error Occurred</h1>;
  }
  return (
    <div>
      {superHero?.data.map((heros) => (
        <h1>{heros.name}</h1>
      ))}

      <div className="freinds border-t-2">
        {freinds?.data.map((freinds) => (
          <h1>{freinds.name}</h1>
        ))}
      </div>
    </div>
  );
};

export default Rq_Parallel;
