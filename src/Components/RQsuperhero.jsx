import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import API from "../Api/API";

const fetchSuperHero = () => {
  return API.get("/SuperHeros");
};

const RQsuperhero = () => {
  const { isLoading, data, isError, error, refetch } = useQuery(
    "FetchRQsuperHero",
    fetchSuperHero,
    {
      enabled: false,
    }
  );
  return (
    <div className="">
      RQsuperhero :
      {isLoading ? (
        <h1>Loading . . .</h1>
      ) : (
        <div className="Superhero_list">
          {data?.data.map((heros) => {
            return <div key={heros.id}>{heros.name} </div>;
          })}
        </div>
      )}
      {isError && <h1>{error.message}</h1>}
      <button className="p-4 rounded-lg bg-green-600" onClick={refetch}>
        Fetch Super Hero
      </button>
    </div>
  );
};

export default RQsuperhero;
