import React from "react";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

const Mysuperhero = () => {
  const toggle = true;
  const queryParam = "Mysuperhero";
  const onSuccess = (data) => {
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  const { isLoading, data, isFetching, refetch } = useSuperHeroData(
    onSuccess,
    onError,
    queryParam,
    toggle
  );
  return (
    <div>
      <div className="">
        Mysuperhero :
        {isLoading ? (
          <h1>Loading . . .</h1>
        ) : (
          <div className="Superhero_list">
            {data?.data.map((heros) => {
              return <div key={heros.id}>{heros.name} </div>;
            })}
          </div>
        )}
        {/* {isLoading || (isFetching && <h1>Loading ....</h1>)}
        {data?.map((heroname) => {
          return <h1 key={heroname}>{heroname}</h1>;
        })} */}
        <button className="p-4 rounded-lg bg-red-600" onClick={refetch}>
          Fetch Super Hero
        </button>
      </div>
    </div>
  );
};

export default Mysuperhero;
