import React from "react";
import { useParams } from "react-router-dom";
import { useRQsuperHeroData } from "../hooks/useRQsuperHeroData";

const Rqsuperheropage = () => {
  const { id } = useParams();
  const { isLoading, data, isFetching } = useRQsuperHeroData(id);
  return (
    <div>
      {isLoading || isFetching ? (
        <h1>Loading . . .</h1>
      ) : (
        <div className="Superhero_list">
          <h1>
            {data?.data.name} ============ {data?.data.alterEgo}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Rqsuperheropage;
