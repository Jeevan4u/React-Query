import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import API from "../Api/API";

const fetchSuperHero = () => {
  return API.get("/SuperHeros");
};

const RQsuperhero = () => {
  const [refetchTime, setrefetchTime] = useState(3000);
  const onSuccess = (data) => {
    if (data.length === 4) {
      setrefetchTime(false);
    }
  };

  const onError = (error) => {
    if (error) {
      setrefetchTime(false);
    }
  };
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "FetchRQsuperHero",
    fetchSuperHero,
    {
      refetchInterval: refetchTime,
      onSuccess,
      onError,
      select: (data) => {
        const superHeroNames = data.data.map((hero) => hero.name);
        return superHeroNames;
      },
    }
  );
  return (
    <div className="">
      RQsuperhero :
      {/* {isLoading || isFetching ? (
        <h1>Loading . . .</h1>
      ) : (
        <div className="Superhero_list">
          {data?.data.map((heros) => {
            return <div key={heros.id}>{heros.name} </div>;
          })}
        </div>
      )} */}
      {isLoading || (isFetching && <h1>Loading ....</h1>)}
      {isError && <h1>{error.message}</h1>}
      {data?.map((heroname) => {
        return <h1 key={heroname}>{heroname}</h1>;
      })}
      <button className="p-4 rounded-lg bg-green-600">Fetch Super Hero</button>
    </div>
  );
};

export default RQsuperhero;
