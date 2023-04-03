import axios from "axios";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  useAddsuperHeroData,
  useSuperHeroData,
} from "../hooks/useSuperHeroData";

const RQsuperhero = () => {
  const [refetchTime, setrefetchTime] = useState(3000);
  const [name, setName] = useState();
  const [alterEgo, setAlterEgo] = useState();
  const toggle = true;

  const { isLoading, data, isError, error, isFetching } =
    useSuperHeroData(toggle);

  const { mutate } = useAddsuperHeroData();
  return (
    <div className="">
      RQsuperhero :
      {isLoading || isFetching ? (
        <h1>Loading . . .</h1>
      ) : (
        <div className="Superhero_list">
          <form action="">
            <div className="heroName">
              <label htmlFor="Name">HeroName</label>
              <input
                type="text"
                placeholder="HeroName"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                defaultValue={name}
              />
            </div>
            <div className="heroAlterEgo">
              <label htmlFor="Ego">AlterEgo</label>
              <input
                type="text"
                placeholder="AlterEgo"
                onChange={(e) => {
                  setAlterEgo(e.target.value);
                }}
                defaultValue={alterEgo}
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 p-4 rounded-lg m-4"
              onClick={(e) => {
                e.preventDefault();
                const hero = { name, alterEgo };
                mutate(hero);
              }}
            >
              Submit
            </button>
          </form>
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
