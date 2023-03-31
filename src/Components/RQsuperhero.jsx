import axios from "axios";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

const RQsuperhero = () => {
  const [refetchTime, setrefetchTime] = useState(3000);
  const queryParam = "RQsuperhero";
  const toggle = true;
  const onSuccess = (data) => {
    if (data.data.length === 4) {
      setrefetchTime(false);
    }
  };

  const onError = (error) => {
    if (error) {
      setrefetchTime(false);
    }
  };
  const { isLoading, data, isError, error, isFetching } = useSuperHeroData(
    onSuccess,
    onError,
    queryParam,
    toggle,
    refetchTime
  );
  return (
    <div className="">
      RQsuperhero :
      {isLoading || isFetching ? (
        <h1>Loading . . .</h1>
      ) : (
        <div className="Superhero_list">
          {data?.data.map((heros) => {
            return (
              <div key={heros.id} className="my-2">
                <Link className="p-2  underline " to={`${heros.id}`}>
                  {heros.name}
                </Link>
              </div>
            );
          })}
        </div>
      )}
      {/* {isLoading || (isFetching && <h1>Loading ....</h1>)}
      {isError && <h1>{error.message}</h1>} */}
      {/* {data?.map((heroname) => {
        return <h1 key={heroname}>{heroname}</h1>;
      })} */}
      <button className="p-4 rounded-lg bg-green-600">Fetch Super Hero</button>
    </div>
  );
};

export default RQsuperhero;
