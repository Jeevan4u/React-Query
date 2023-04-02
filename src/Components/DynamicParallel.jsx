import React, { Fragment } from "react";
import API from "../Api/API";
import { useQueries } from "react-query";

const fetchDynamic = (heroId) => {
  return API.get(`/SuperHeros/${heroId}`);
};
const DynamicParallel = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["Dynamic-superhero", id],
        queryFn: () => fetchDynamic(id),
      };
    })
  );

  console.log(queryResults[0].data?.data);
  return (
    <div>
      DynamicParallel
      <div className="dynamic-fetch">
        {queryResults.map((items) => (
          <Fragment key={items.data?.data.id}>
            <h1>
              Id:{items.data?.data.id} {items.data?.data.name}
            </h1>
            <p></p>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default DynamicParallel;
